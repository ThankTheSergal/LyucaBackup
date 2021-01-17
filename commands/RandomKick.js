module.exports = {
    name: `roulette`,
    description: `-m Selects a random user from the list of pinged users. Then kicks them.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr)  {
        function hasDuplicates(arr){
	        return new Set(arr).size !== arr.length; 
            }
        async function blah(){
            let roles = DatabaseArr[3];
            if(message.member.hasPermission(`KICK_MEMBERS`)) {
                let g = message.mentions.users;
                if(g.size == 0) {
                    return message.channel.send(`You must actually ping some members if you want to play.`)
                }
                let h = g.map(user => user.id)
                h.push(message.author.id)
                if(hasDuplicates(h)) {
                    console.log(`Duplicates found`)
                }
                let rngesus = Math.floor(Math.random() * h.length)
                let loser   = message.guild.members.cache.find(l => l.id == h[rngesus])
                let lRoles  = loser.roles.cache.map(r => r.id);
                let lString = lRoles.toString()
                let list = await roles.create({
                    uid: loser.id,
                    sid: message.guild.id,
                    rid: lString,
                })
                message.guild.fetchInvites().then(async function(invites){
                    let invArr = await invites.map(i => i.code)
                    loser.send(`https://discord.gg/${invArr[0]}`).then(() => {
                        message.channel.send(`${loser.user.tag}, has been shot, and killed.`)
                        loser.kick()  
                    })
                })
            }
            else{
                return message.channel.send(`Sorry, you lack the permissions to play this game. Now kindly fuck off.`)
            }
        }
        blah();
    }
}