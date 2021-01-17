module.exports = {
    name: `mute`,
    description: `-m You guess.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr){
    async function blah() {
        if(message.member.hasPermission(`MANAGE_ROLES`)) {
            let ex = require('./ExternFuncs');
            let userToMute = ex.FindMember(message, msgArr);
            if(!userToMute) return message.reply(`actually ping someone you actual brainlet.`);
            let muteRole = message.guild.roles.cache.find(role => role.name == 'LyucaMute')
            if(!muteRole) {
                let LyRole = message.guild.roles.cache.find(role => role.name == 'Lyuca Bot')
                if(LyRole){
                    let pos = LyRole.position - 1;
                    let mRole = await message.guild.roles.create({
                        data: {
                            name: `LyucaMute`,
                            color: '#454545',
                            permissions: [],
                            position: pos,
                            },
                        reason: `There was no designated mute role yet.`
                        })
                    userToMute.roles.add(mRole);
                    }
                }
                else{
                    userToMute.roles.add(muteRole)
                    return message.channel.send(`${userToMute.user.tag}, has been muted.`)
                }
            }
            else{
                return message.channel.send(`You don't have permissions to use this.`)
            }
        }
        blah();
    }
}