import axios from "axios";
import {
  DiscordConfiguration,
  DiscordMessageExample,
  validationError,
  serverError,
  BaseMessageResponse,
  BaseMessageError,
} from "../types";
import { mapDiscordStructureType, getDiscordPrompt } from "../utils";

import { getPromptRequest } from "./openAi";

export const sendDiscordMessage = async (
  openAiSecret: string,
  message: string,
  configuration: DiscordConfiguration
): Promise<BaseMessageError | BaseMessageResponse> => {
  if (!configuration.webhookUrl) {
    return validationError(
      "Webhook URL is required to send discord notifications"
    );
  }
  if (!message) {
    return validationError("Message is required to send discord notifications");
  }

  const getMappedStructure = () => {
    if ("example" in configuration) {
      return mapDiscordStructureType(configuration.example);
    }
    return mapDiscordStructureType(
      DiscordMessageExample.SIMPLE,
      configuration.customExample
    );
  };

  const prompt = getDiscordPrompt(message, {
    ...configuration,
    mappedStructure: getMappedStructure(),
  });
  try {
    const { data } = await getPromptRequest(openAiSecret, prompt);
    const result = data.choices[0].message.content;

    if (result) {
      await axios({
        method: "POST",
        url: configuration.webhookUrl,
        headers: {
          "Content-Type": "application/json",
        },
        data: result,
      });
    }
    return {
      result,
      usage: data.usage,
    };
  } catch (err) {
    return serverError();
  }
};
