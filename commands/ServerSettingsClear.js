module.exports = {
    name: `clearserver`,
    description: `-m Removes the current server from the database.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr) {
        async function blah() {
            if(message.member.hasPermission(`ADMINISTRATOR`)){
                let currentServer = message.guild.id;
                let serverSettings = DatabaseArr[1];
                const h = await serverSettings.destroy({where: { serverId: currentServer} });
                if (!h){
                    return message.reply(`the server's settings could not be found.`)
                }
                return message.reply(`Server settings deleted.`)
            }
            else {
                return message.channel.send(`I'm sorry, but it appears you lack the permissions. You need to have admin perms to use this command.`)
            }
        }
        blah();  
    }
}