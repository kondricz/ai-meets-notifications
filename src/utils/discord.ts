import {
  DiscordConfiguration,
  DiscordMessageExample,
  Language,
} from "../types";
import { discordSimple, discordList, discordComplex } from "../examples";

export const mapStructureType = (
  type: DiscordMessageExample,
  custom?: string
) => {
  if (!!custom) {
    return custom;
  }
  switch (type) {
    case DiscordMessageExample.LIST:
      return discordList;
    case DiscordMessageExample.COMPLEX:
      return discordComplex;
    case DiscordMessageExample.SIMPLE:
    default:
      return discordSimple;
  }
};

export const getDiscordPrompt = (
  message: string,
  {
    minLength,
    maxLength,
    emotions,
    language,
    mappedStructure,
  }: DiscordConfiguration & { mappedStructure: string }
) => {
  return `
    You are about to write a message to discord. Rewrite the following message: ${message}. If You see any links (http:// or https://), make sure to keep them intact!.
    The message should be between ${minLength || 100} and ${
    maxLength || 300
  } characters long. Tone your message using the following emotions: ${Object.values(
    emotions
  ).join(",")}.
    It should be in ${
      language || Language.en
    } language. As You are generating a message to discord webhook, you must use the following structure:
    ${mappedStructure}.It is a stringified JSON, and it is marked inside where You must replace the content.
    It is important to return ONLY the JSON format, nothing else!
    `;
};
