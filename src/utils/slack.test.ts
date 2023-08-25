import { SlackMessageExample, Emotion, Language } from "../types";
import { getSlackPrompt, mapSlackStructureType } from "./slack";

describe("getSlackPrompt", () => {
  it("Should return the expected prompt", () => {
    const prompt = getSlackPrompt("Hello world", {
      minLength: 100,
      maxLength: 150,
      emotions: [Emotion.JOY, Emotion.ANGER],
      language: Language.sv,
      mappedStructure: mapSlackStructureType(SlackMessageExample.SIMPLE),
    });

    // The message can be found within the prompt
    expect(prompt.includes("Hello world")).toBeTruthy();

    // min and max length are defined
    expect(prompt.includes("100 and 150")).toBeTruthy();

    // emotions are listed
    expect(prompt.includes("joy,anger")).toBeTruthy();

    // language is set
    expect(prompt.includes("It should be in Swedish language")).toBeTruthy();

    // structure is selected
    expect(prompt.includes(`{"blocks":[{"type":"section","text":{"type":"mrkdwn","text":"Example message text"}}]}`)).toBeTruthy();
  });
});
