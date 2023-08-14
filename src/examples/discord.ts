export const discordSimple = JSON.stringify({
    content: "Message headline"
})

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