module.exports = {
    name: `initialize`,
    description: `-m Adds the current server to the database.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr) {
        let serverSettings = DatabaseArr[1]
        if (message.member.hasPermission(`ADMINISTRATOR`))
        {
            message.channel.send(`Initializing server...`)
            .then(async function() {
                    let h = await serverSettings.findOne({where: {serverid: message.guild.id}})
                    if(!h) {
                        const h = serverSettings.create({
                            serverid: `${message.guild.id}`,
                            verificationchannel: null,
                            verificationrole: null,
                            starboardchannelid: null,
                            starboardemoteid: null,
                            imagelogchannel: null,
                            });
                            return message.reply(`Your server has been initialized. Please use the settings command to view / edit individual settings.`);                              
                    }
                    else{
                    return message.channel.send(`Your server has already been initialized.`)
                    }
            })
            .catch(collected => {
            message.channel.send(`Helpful error message here`);
            });   
        }
        else {
            return message.channel.send(`I'm sorry, but it appears you lack the permissions. You need to have admin perms to use this command.`)
        }
    }
};