<h1 align="center">Welcome to @kondricz/ai-meets-notifications 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@kondricz/ai-meets-notifications" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@kondricz/ai-meets-notifications.svg">
  </a>
  <a href="https://github.com/kondricz/ai-meets-notifications#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/kondricz/ai-meets-notifications/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> Wrapper combining openAI and http requests to post AI generated messages to popular communication channels.

### 🏠 [Homepage](https://github.com/kondricz/ai-meets-notifications#readme)

## Install

```sh
npm install @kondricz/ai-meets-notifications --save
```

## How to use it

Sending simple messages for both slack and discord webhooks.

```
import {
  NotificationsClient,
  DiscordMessageExample,
  SlackMessageExample,
  Emotion,
  Language,
} from "@kondricz/ai-meets-notifications";

const notifications = new NotificationsClient({ openAiSecret: "your open ai secret" });

await Promise.all([
  notifications.sendDiscordMessage('Hello, world!', {
    maxLength: 400,
    minLength: 150,
    language: Language.pl,
    emotions: [Emotion.ACCEPTANCE, Emotion.SAFETY, Emotion.JOY],
    webhookUrl: 'Your discord webhook url',
    example: DiscordMessageExample.SIMPLE,
  }),
  notifications.sendSlackMessage('Hello world', {
    maxLength: 400,
    minLength: 150,
    language: Language.pl,
    emotions: [Emotion.ACCEPTANCE, Emotion.SAFETY, Emotion.JOY],
    webhookUrl: 'Your slack webhook url',
    example: SlackMessageExample.SIMPLE,
  }),
]);
```

If You want to send message in a predefined structure, use the example parameter. This will instruct the AI to generate a message based on the templates defined above. This is important because if the payload is not formatted by the requirements, the request will be rejected. Example parameter is required. Examples can be found within the source code, here are the ones for discord:

```
DiscordMessageExample.SIMPLE:

// This will instruct open AI to generate a message based on this template.

export const discordSimple = JSON.stringify({
    content: "Message headline"
})

DiscordMessageExample.LIST:

export const discordList = JSON.stringify({
    content: "Message headline",
    embeds: [{
        description: "Message description",
        fields: [
            {
                name: "Example field",
                value: "Example value"
            },
            {
                name: "Example field",
                value: "Example value"
            },
            {
                name: "Example field",
                value: "Example value"
            }
        ]
    }]
})

DiscordMessageExample.COMPLEX:

export const discordComplex = JSON.stringify({
    content: "Message headline",
    embeds: [{
        title: "Message title",
        description: "Message description",
        fields: [],
        color: 2326507,
        author: {
            name: "Name of the author",
            url: "URL to the author (if present)",
            icon_url: "URL icon to the author (if present)"
        }
    }]
})

```

You can also overwrite this with your own template (use the customExample parameter). Send a stringified JSON which is a valid payload, You prefer the AI to use as a template.

```
  notifications.sendDiscordMessage('Hello, world!', {
    customExample: "{ content: 'valid template', fields: 'AI will use this to generate message' }"
  })

```

## Author

👤 **kondricz**

* Website:  
* Github: [@kondricz](https://github.com/kondricz)
* LinkedIn: [@kondricz](https://linkedin.com/in/kondricz)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kondricz/ai-meets-notifications/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [kondricz](https://github.com/kondricz).<br />
This project is MIT licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_