const { Message } = require("discord.js")

module.exports = {
    name: `ok`,
    description: `Yes.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr) {
        return message.channel.send(`https://cdn.discordapp.com/attachments/643844726419750925/728356483200319488/unknown.png`)
    }
}