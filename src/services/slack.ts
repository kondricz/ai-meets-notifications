import axios from "axios";
import {
  SlackConfiguration,
  SlackMessageExample,
  validationError,
  serverError,
  BaseMessageResponse,
  BaseMessageError,
} from "../types";
import { mapSlackStructureType, getSlackPrompt } from "../utils";

import { getPromptRequest } from "./openAi";

export const sendSlackMessage = async (
  openAiSecret: string,
  message: string,
  configuration: SlackConfiguration
): Promise<BaseMessageError | BaseMessageResponse> => {
  if (!configuration.webhookUrl) {
    return validationError(
      "Webhook URL is required to send slack notifications"
    );
  }
  if (!message) {
    return validationError("Message is required to send slack notifications");
  }

  const getMappedStructure = () => {
    if ("example" in configuration) {
      return mapSlackStructureType(configuration.example);
    }
    return mapSlackStructureType(
      SlackMessageExample.SIMPLE,
      configuration.customExample
    );
  };

  const prompt = getSlackPrompt(message, {
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
