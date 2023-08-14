import axios from "axios";
import { DEFAULT_MODEL, OpenAIChatResponse } from "../types";

export const getPromptRequest = (openAiSecret: string, prompt: string) => {
  return axios<OpenAIChatResponse>({
    method: "POST",
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openAiSecret}`,
    },
    data: {
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },
  });
};
