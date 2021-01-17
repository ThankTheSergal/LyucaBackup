module.exports = {
    name:'ban',
    description:`-m If you don't know what this means, you don't need to be using this.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr)  {
        async function blah() {
            const filter = response => {
                return response.author == message.author;
            }
            let ex = require('./ExternFuncs');
            let victim = ex.FindMember(message,msgArr);
            let colour = ex.GetRandomColour();
            if(victim){
                let confirm = new Discord.MessageEmbed()
                    .setAuthor(`You are about to ban ${victim.user.username}`)
                    .setThumbnail(victim.user.avatarURL())
                    .setDescription(`Are you sure you want to ban? Y / N`)
                    .setColor(colour)
                message.channel.send(confirm);
                message.channel.awaitMessages(filter, {max: 1, time: 20000, errors: ['time']})
                .then(async (collected) => {
                    let rsp = collected.first().content.toLowerCase().replace(/[eso.]/g,'');
                    if(rsp == 'n'){
                        return message.channel.send('Phew, that was close.');
                    }
                    else if(rsp == 'y'){
                        message.guild.members.ban(victim.user);
                        let resArr = [
                            `:pinching_hand: ${victim.user.username}#${victim.user.discriminator} gave off too much small dick energy.`,
                            `:person_golfing: ${victim.user.username}#${victim.user.discriminator} cya retard.`,
                            `:wheelchair: Sorry ${victim.user.username}#${victim.user.discriminator}, we don't support handicapped rights.`,
                            `:couple_mm: ${victim.user.username}#${victim.user.discriminator} has been found to be a homosexual. He has been forcefully removed.`
                        ];
                        let num = Math.floor(Math.random() * resArr.length);
                        let kEmb = new Discord.MessageEmbed()
                            .setDescription(resArr[num])
                            .setColor(colour)
                        return message.channel.send(kEmb);
                    }
                    else{
                        return message.channel.send(`I know it's hard, but please gather the last 3 brain cells you have left to give me a proper answer next time.`);
                    }
                })
                .catch(async (e) => {
                    let h = await message.channel.send(`Hey retard, answering the question next time might help.`);
                    let delay = setInterval(() => {
                        h.delete();
                        clearInterval(delay);
                    },10000)
                });
            }
            else{
                let fEmb = new Discord.MessageEmbed()
                .setDescription(`Could not find the user you wanted to ban. Maybe actually ping someone real this time you mong. (I also take IDs)\n\nHere's an example for your handicapped ass:`)
                .setColor(`#8D8DE7`)
                .attachFiles(`./images/examples/banexample.png`)
                .setImage(`attachment://banexample.png`)
            return message.channel.send(fEmb);
            }
        }
        if(message.member.hasPermission('BAN_MEMBERS')){
            blah();
        }
        else return message.channel.send(`The fuck you trying to do nigga? You don't have permissions fucktard.`);
    }
}