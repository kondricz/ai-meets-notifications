import axios from 'axios';
import { DiscordConfiguration, DEFAULT_MODEL, DiscordMessageExample, OpenAIChatResponse } from "../types";
import { mapStructureType, getDiscordPrompt } from "../utils";

export const sendDiscordMessage = async (
  openAiSecret: string,
  message: string,
  configuration: DiscordConfiguration
) => {
  if (!configuration.webhookUrl) {
    throw Error("Webhook URL is required to send discord notifications");
  }
  if (!message) {
    throw Error("Message is required to send discord notifications");
  }

  const prompt = getDiscordPrompt(message, {
    ...configuration,
    mappedStructure: mapStructureType(
      configuration.example || DiscordMessageExample.SIMPLE,
      configuration.customExample
    ),
  });

  try {
    const { data } = await axios<OpenAIChatResponse>({
      method: 'POST',
      url: 'https://api.openai.com/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAiSecret}`,
      },
      data: {
        model: DEFAULT_MODEL,
        messages: [
          {
            role: "user",
            content: prompt,
          }
        ]
      }
    })

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
