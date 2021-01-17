module.exports = {
    name: `invite`,
    description: `-u Returns the bot's invite link.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr)  {
        message.channel.send(`https://discordapp.com/api/oauth2/authorize?client_id=647232151049338880&scope=bot&permissions=470674486`);
    }
};