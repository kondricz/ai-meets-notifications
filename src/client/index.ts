import {sendDiscordMessage, sendSlackMessage} from "../services";
import { DiscordConfiguration, SlackConfiguration } from "../types";

/**
 * Interface for initializing the NotificationsClient.
 */
interface InitParameters {
  /**
   * Your OpenAI secret key for API authentication.
   */
  openAiSecret: string;
}

/**
 * Main class representing the NotificationsClient.
 */
export class NotificationsClient {
  /**
   * The OpenAI secret key for API authentication.
   */
  openAiSecret: string;

  /**
   * Constructor for the NotificationsClient class.
   *
   * @param init - Initialization parameters for the NotificationsClient.
   */
  constructor(init: InitParameters) {
    this.openAiSecret = init.openAiSecret;
  }

  /**
   * Method to send a message to Discord.
   *
   * @param message - The content of the message to be sent.
   * @param configuration - An object containing configuration options for the Discord message.
   *                        (e.g., target channel, formatting, etc.)
   * @returns A Promise indicating whether the message was sent successfully or not.
   */
  public sendDiscordMessage(
    message: string,
    configuration: DiscordConfiguration
  ) {
    return sendDiscordMessage(this.openAiSecret, message, configuration);
  }

  /**
   * Method to send a message to Slack.
   *
   * @param message - The content of the message to be sent.
   * @param configuration - An object containing configuration options for the Slack message.
   *                        (e.g., target channel, formatting, etc.)
   * @returns A Promise indicating whether the message was sent successfully or not.
   */
  public sendSlackMessage(
    message: string,
    configuration: SlackConfiguration
    ) {
      return sendSlackMessage(this.openAiSecret, message, configuration)
    }

  /**
   * Placeholder method to send a message to Telegram (not implemented yet).
   *
   * @param message - The content of the message to be sent.
   */
  // public sendTelegramMessage(message: string) {}

  /**
   * Placeholder method to send a message to WhatsApp (not implemented yet).
   *
   * @param message - The content of the message to be sent.
   */
  // public sendWhatsappMessage(message: string) {}
}
