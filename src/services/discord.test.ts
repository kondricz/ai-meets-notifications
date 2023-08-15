import { DiscordConfiguration } from "../types";
import { sendDiscordMessage } from "./discord";

describe("sendDiscordMessage", () => {
  it("Should throw an error if message is missing", async () => {
    const missingMessage = await sendDiscordMessage("open_secret", "", {
      webhookUrl: "test-webhook-url",
    } as DiscordConfiguration);

    const missingWebhook = await sendDiscordMessage(
      "open_secret",
      "this message",
      {} as DiscordConfiguration
    );

    expect(typeof missingMessage !== "string" && missingMessage.error).toBeTruthy();
    expect(typeof missingMessage !== "string" && missingMessage.reason === "ValidationError").toBeTruthy();

    expect(typeof missingWebhook !== "string" && missingWebhook.error).toBeTruthy();
    expect(typeof missingWebhook !== "string" && missingWebhook.reason === "ValidationError").toBeTruthy();
  });
  it("Should generate the correct prompt based on the configuration", () => {})
  it("Should send the AI generated prompt to the discord webhook", () => {})

  it("Should return information about the prompt and other metadata of the request", () => {})
});
