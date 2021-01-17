const ExternFuncs = require("./ExternFuncs");
const { kickRoles, KickRoles } = require("./ExternFuncs");

module.exports = {
    name: `momentofsilence`,
    description: `-m Kicks anybody who speaks during the moment of silence. (60 seconds)`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr)  {
        async function blah() {
            let roles = DatabaseArr[3]
            if (message.member.hasPermission(`BAN_MEMBERS`))
            {   const filter = m => !m.author.bot;
                let nSec = 4;
                let cdMsg = await message.channel.send(`Moment of silence starting in ${nSec}.`)
                let countdown = setInterval(async function (){
                    nSec--
                    cdMsg.edit(`Moment of silence starting in ${nSec}.`)
                    if(nSec < 1){
                        cdMsg.delete()
                        message.channel.send(`Moment of silence started. Please stay silent for 60 seconds.`)
                        message.channel.awaitMessages(filter, {time: 60000, errors: ['time'] })
                        .catch(async (collected) => {
                            message.channel.send(`Moment is over, thank you for remaining quiet...`)
                            let badPeople = [];
                            let idArr = collected.map(m => m.author.id)
                                for(i = 0; i < idArr.length; i++) {
                                    let tMem = message.guild.members.cache.find(m => m.id == idArr[i])
                                    if(tMem){
                                        badPeople.push(` ${tMem.user.username}`);
                                        let lRoles  = tMem.roles.cache.map(r => r.id);
                                        let lString = lRoles.toString()
                                        let list = await roles.create({
                                            uid: tMem.id,
                                            sid: message.guild.id,
                                            rid: lString,
                                        })
                                        message.guild.fetchInvites().then(async function(invites){
                                            let invArr = await invites.map(i => i.code)
                                            tMem.send(`https://discord.gg/${invArr[0]}`).then(() => {
                                                tMem.kick()  
                                            })
                                        })
                                    }
                                }
                            if(badPeople.length > 0){
                                message.channel.send(`...except for${badPeople}. Learn to shut the fuck up retard(s).`)
                            }
                        })
                        clearInterval(countdown)           
                    }
                }, 1000)
            }
        }
        blah();
    }
}