module.exports = {
    name: `unmute`,
    description: `-m Unmutes a user.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr)  {
            if(message.member.hasPermission(`MANAGE_ROLES`)) {
            let ex = require('./ExternFuncs');
            let userToUnmute = ex.FindMember(message, msgArr);
            if(!userToUnmute) return message.channel.send(`You must actually ping a user to unmute them.`)
            else {
                let hasRole = userToUnmute.roles.cache.find(h => h.name == `LyucaMute`)
                if(!hasRole) return message.channel.send(`This user has not been muted`)
                userToUnmute.roles.remove(hasRole)
                return message.channel.send(`${userToUnmute.user.tag}, has been unmuted.`)
            }
        }
        else{
            return message.channel.send(`You don't have the permissions retard.`)
        }
    }
}