import { BaseMessageConfiguration } from "./base";

/**
 * Configuration options for a Discord message.
 *
 * @param maxLength - The maximum length allowed for the message. Must be a positive integer.
 * @param minLength - The minimum length required for the message. Must be a positive integer.
 * @param language - The language of the message. Use ISO language codes (e.g., 'en', 'fr', 'es').
 * @param emotions - An array of emotions associated with the message. See Emotion enum for available options.
 * @param webhookUrl - The webhook URL to send the message to the Discord channel.
 * @param example - A message content example, which will be used to generate the prompt.
 * @param customExample - Custom examples also supported. They must be a JSON stringified valid discord webhook payload.
 */
export type DiscordConfiguration =
  | (BaseMessageConfiguration & { example: DiscordMessageExample })
  | (BaseMessageConfiguration & { customExample: string });

/**
 * List of supported message examples for discord messages.
 * See structure examples/discord for available examples
 */
export enum DiscordMessageExample {
  SIMPLE = "SIMPLE",
  LIST = "LIST",
  COMPLEX = "COMPLEX",
}
