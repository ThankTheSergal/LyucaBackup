module.exports = {
    name: `ask`,
    description: `-f Creates a poll with upvote and downvote options.`,
    execute(Discord, message, Lyuca, sdPrefix)  {
        async function blah() {
        let pollQ = message.content.substr(sdPrefix.length + 3)
        if (pollQ) {
            message.delete();
            let lyucaAvatar = message.mentions.users.first() || message.author;
            let pollEmbed = new Discord.MessageEmbed()
                .setDescription(`${lyucaAvatar} asks:`)
                .addField(`----------------------`,`${pollQ}`)
                .addField(`----------------------`,`React to vote!`)
                .setColor(`#7000FF`)
            const sentPoll = await message.channel.send(pollEmbed)
                  sentPoll.react(`👍`)
                  .then(() => sentPoll.react(`👎`))
            }
        else {
                let noEmbed = new Discord.MessageEmbed()
                    .setTitle(`You need to ask a question first. See the example:`)
                    .attachFiles(`./images/examples/userpollexample.png`)
                    .setImage(`attachment://userpollexample.png`)
                    .setColor(`#00FFAA`)
                return message.channel.send(noEmbed)
            }
        }
    blah();
    }
};