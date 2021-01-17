module.exports = {
    name:`kick`,
    description:`-m Kicks someone.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr) {
        async function blah() {
            let ex = require('./ExternFuncs');
            let victim = ex.FindMember(message, msgArr);
            let colour = ex.GetRandomColour();
            if(victim){
                victim.kick();
                let kEmb = new Discord.MessageEmbed()
                    .setDescription(`:wheelchair: ${victim.user.username}#${victim.user.discriminator} was kicked. Thank fucking god too, they were annoying as shit.`)
                    .setColor(colour)
                return message.channel.send(kEmb)
            }
            else{
                let fEmb = new Discord.MessageEmbed()
                .setDescription(`Could not find the user you wanted to kick. Maybe actually ping someone real this time you mong. (I also take IDs)\n\nHere's an example for your handicapped ass:`)
                .setColor(colour)
                .attachFiles(`./images/examples/kickexample.png`)
                .setImage(`attachment://kickexample.png`)
            return message.channel.send(fEmb)
            }
        }
        if(message.member.hasPermission('KICK_MEMBERS')){
            blah();
        }
        else return message.channel.send(`I'm sorry but who are you?`)
    }
}