export const slackSimple = JSON.stringify({
    blocks: [
        {
            type: "section",
            text: { type: "mrkdwn", text: `Example message text` }
        },
    ],
})

export const slackList = JSON.stringify({
    blocks: [
        {
            type: "section",
            text: { type: "mrkdwn", text: `Example message text` }
        },
        {
            type: "section",
            text: {
                type: "mrkdwn", text: `Example multiline message text: \n
            Multiline 1 \n
            Multiline 2 \n
            Multiline 3` }
        },
    ],
})