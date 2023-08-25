import { DiscordMessageExample, Emotion, Language } from "../types";
import { getDiscordPrompt, mapDiscordStructureType } from "./discord";

describe("getDiscordPrompt", () => {
  it("Should return the expected prompt", () => {
    const prompt = getDiscordPrompt("Hello world", {
      minLength: 100,
      maxLength: 150,
      emotions: [Emotion.JOY, Emotion.ANGER],
      language: Language.sv,
      mappedStructure: mapDiscordStructureType(DiscordMessageExample.SIMPLE),
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
    expect(prompt.includes(`{"content":"Message headline"}`)).toBeTruthy();
  });
});
