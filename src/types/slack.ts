import { BaseMessageConfiguration } from './base';

/**
 * Configuration options for a Slack message.
 * 
 * @param maxLength - The maximum length allowed for the message. Must be a positive integer.
 * @param minLength - The minimum length required for the message. Must be a positive integer.
 * @param language - The language of the message. Use ISO language codes (e.g., 'en', 'fr', 'es').
 * @param emotions - An array of emotions associated with the message. See Emotion enum for available options.
 * @param webhookUrl - The webhook URL to send the message to the Slack channel.
 * @param example - A message content example, which will be used to generate the prompt.
 * @param customExample -Custom examples also supported. They must be a JSON stringified valid slack webhook payload.
 */
export interface SlackConfiguration extends BaseMessageConfiguration {
    webhookUrl: string;
    example: SlackMessageExample;
    customExample?: string;
}

/**
 * List of supported message examples for slack messages.
 * See structure examples/slack for available examples
 */
export enum SlackMessageExample {
    SIMPLE = 'SIMPLE',
    LIST = 'LIST'
}