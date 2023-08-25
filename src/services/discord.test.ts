import axios from "axios";
import {
  DiscordConfiguration,
  BaseMessageResponse,
} from "../types";
import { sendDiscordMessage } from "./discord";

const OPEN_AI_RESPONSE = "Okay cool, I'll send this to the discord";

jest.mock("axios");
jest.mock("./openAi", () => ({
  ...jest.requireActual("./openAi"),
  getPromptRequest: jest.fn(() => ({
    data: {
      choices: [{ message: { content: OPEN_AI_RESPONSE } }],
      usage: {
        prompt_tokens: 100,
        completion_tokens: 200,
        total_tokens: 300,
      },
    },
  })),
}));

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

    expect(
      "reason" in missingMessage && missingMessage.reason === "ValidationError"
    ).toBeTruthy();
    expect(
      "reason" in missingWebhook && missingWebhook.reason === "ValidationError"
    ).toBeTruthy();
  });
  it("Should generate the correct prompt based on the configuration", async () => {
    axios.post = jest.fn().mockResolvedValue({});
    const response = await sendDiscordMessage(
      "open_secret",
      "Unit tests are cool, but integration tests are cooler",
      {
        webhookUrl: "test-webhook-url",
      } as DiscordConfiguration
    );

    expect('result' in response).toBeTruthy();
    expect((response as BaseMessageResponse).result).toEqual(OPEN_AI_RESPONSE);
  });
  it("Should return information about the prompt and other metadata of the request", async () => {
    axios.post = jest.fn().mockResolvedValue({});
    const response = await sendDiscordMessage(
      "open_secret",
      "Unit tests are cool, but integration tests are cooler",
      {
        webhookUrl: "test-webhook-url",
      } as DiscordConfiguration
    );

    expect('usage' in response).toBeTruthy();
    expect((response as BaseMessageResponse).usage.prompt_tokens).toEqual(100);
    expect((response as BaseMessageResponse).usage.completion_tokens).toEqual(200);
    expect((response as BaseMessageResponse).usage.total_tokens).toEqual(300);
  });
});
