import axios from 'axios';
import { SlackConfiguration, SlackMessageExample } from "../types";
import { mapSlackStructureType, getSlackPrompt } from "../utils";

import { getPromptRequest } from './openAi';

export const sendSlackMessage = async (
  openAiSecret: string,
  message: string,
  configuration: SlackConfiguration
) => {
  if (!configuration.webhookUrl) {
    throw Error("Webhook URL is required to send slack notifications");
  }
  if (!message) {
    throw Error("Message is required to send slack notifications");
  }

  const prompt = getSlackPrompt(message, {
    ...configuration,
    mappedStructure: mapSlackStructureType(
      configuration.example || SlackMessageExample.SIMPLE,
      configuration.customExample
    ),
  });

  try {
    const { data } = await getPromptRequest(openAiSecret, prompt);
    const result = data.choices[0].message.content;

    if (result) {
      await axios({
        method: 'POST',
        url: configuration.webhookUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        data: result,
      });
    }
  } catch (err) {
    console.log(err, "FN ERRORED");
  }
};
