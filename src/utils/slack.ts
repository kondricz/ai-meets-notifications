import {
  SlackConfiguration,
  SlackMessageExample,
  Language,
} from "../types";
import { slackSimple, slackList } from "../examples";

export const mapSlackStructureType = (
  type: SlackMessageExample,
  custom?: string
) => {
  if (!!custom) {
    return custom;
  }
  switch (type) {
    case SlackMessageExample.LIST:
      return slackList;
    case SlackMessageExample.SIMPLE:
    default:
      return slackSimple;
  }
};

export const getSlackPrompt = (
  message: string,
  {
    minLength,
    maxLength,
    emotions,
    language,
    mappedStructure,
  }: SlackConfiguration & { mappedStructure: string }
) => {
  return `
    You are about to write a message to your internal slack channel. Rewrite the following message: ${message}. If You see any links (http:// or https://), make sure to keep them intact!.
    The message should be between ${minLength || 100} and ${
    maxLength || 300
  } characters long. Tone your message using the following emotions: ${Object.values(
    emotions
  ).join(",")}.
    It should be in ${
      language || Language.en
    } language. As You are generating a message to slack webhook, you must use the following structure:
    ${mappedStructure}.It is a stringified JSON, and it is marked inside where You must replace the content.
    It is important to return ONLY the JSON format, nothing else!
    `;
};
