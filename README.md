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

The package is fully typed. An easy example of sending same message to both discord and slack channels

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
    webhookUrl: 'Your discord webhook url',
    example: SlackMessageExample.LIST,
  }),
]);
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