module.exports = {
    name: 'verify',
    description: `A method of self verification to get passed a server's door.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr)  {
        async function blah () {
            let currentServer = message.guild.id;
            let serverSettings = DatabaseArr[1];
            const h = await serverSettings.findOne({ where: { serverId: currentServer } });
            if (h)
            {
                let vRole = h.verificationrole;
                let gRole = message.guild.roles.cache.find(role => role.id == vRole);
                if(!h.verificationChannel){
                    message.member.roles.add(gRole)
                    return message.channel.send(`Success`)    
                }
                else{
                    if(message.channel.id == h.verificationchannel && vRole)
                    {
                        message.member.roles.add(gRole)
                        return message.channel.send(`Success`)     
                    }
                    else {
                        return message.channel.send(`You are in the wrong channel.`)
                    }
                }
            }
        }
        blah();
    }
}