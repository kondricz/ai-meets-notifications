import { NotificationsClient } from ".";

describe("NotificationClient", () => {
  it("Should initialize", () => {
    const client = new NotificationsClient({ openAiSecret: "test-secret" });
    expect(client).toBeTruthy();
  });
  it("Should error, when openAI secret is not provided", () => {
    expect(() => {
      new NotificationsClient({ openAiSecret: "" });
    }).toThrowError("You must provide an OpenAI secret key.");
  });
  it("Should support sending discord messages", async () => {
    const client = new NotificationsClient({ openAiSecret: "test-secret" });
    expect(client.sendDiscordMessage).toBeTruthy();
  });
  it("Should support sending slack messages", () => {
    const client = new NotificationsClient({ openAiSecret: "test-secret" });
    expect(client.sendSlackMessage).toBeTruthy();
  });
});
