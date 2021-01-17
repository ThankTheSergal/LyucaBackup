module.exports = {
    name:`quote`,
    description:`-u Quotes someone because fucking citator broke.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr) {
        async function blah(){
            let mid = msgArr[0];
            let msg = await message.channel.messages.cache.find(m => m.id == mid)
            message.delete()
            let quoteEmbed = new Discord.MessageEmbed()
                .setAuthor(`${msg.author.username} said:`, msg.author.avatarURL())
                .setDescription(msg.content)
                .setColor(`#00FFAA`)
                .setFooter(`Sent`)
                .setTimestamp(msg.createdTimestamp)
            message.channel.send(quoteEmbed)
        }
        blah();
    }
}