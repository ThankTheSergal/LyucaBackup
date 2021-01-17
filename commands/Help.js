module.exports = {
    name: `help`,
    description:`A help command to uhh, help you.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr)  {
        async function blah() {
            let c1 = Math.floor(Math.random() * 256).toString(16)
            let c2 = Math.floor(Math.random() * 256).toString(16)
            let c3 = Math.floor(Math.random() * 256).toString(16)
            let cmdName = cmdArr[0];
            let cmdDesc = cmdArr[1];
            let helpEmb = new Discord.MessageEmbed()
            .setAuthor(`You've asked for help? Fuck you.`, Lyuca.user.avatarURL())
            .setDescription(`What would you like help with?\n-Moderation = :one:\n-Fun = :two:\n-Kinda useless = :three:`)
            .setColor(`#${c1}${c2}${c3}`)
            .setFooter(`Feel free to give me more ideas for this useless bot.`)
        let m = await message.channel.send(helpEmb)
            m.react(`1️⃣`)
            .then(() => m.react(`2️⃣`))
            .then(() => m.react(`3️⃣`))
            .then(() => {
                const filter = (reaction, user) => {
                    return message.author.id == user.id;
                }
                m.awaitReactions(filter, {max: 1, time: 30000, errors: ['time']})
                    .then((collected) => {
                        m.delete()
                        if(!collected) return message.channel.send(`Useful error here.`);
                        let category = ``;
                        let description = [];
                        let mode = ``;
                        if(collected.first()._emoji.name == `1️⃣`){
                            category = `Moderation Commands`;
                            mode = `-m`;
                        }
                        else if(collected.first()._emoji.name == `2️⃣`){
                            category = `Meme Commands`;
                            mode = `-f`;
                        }
                        else if(collected.first()._emoji.name == `3️⃣`){
                            category = `Slightly Useless Commands`;
                            mode = `-u`;
                        }
                        else {
                            return message.channel.send(`You didn't react with a valid emote retard.`)
                        }
                        let basel = cmdName.length;
                        let mCmdDesc = [];
                        let mCmdName = [];
                        for(let i = 0; i < basel; i++){
                            if(cmdDesc[i]){
                                if(cmdDesc[i].startsWith(mode)){
                                    let tempVar = cmdDesc[i].substr(3);
                                    mCmdDesc.push(tempVar);
                                    mCmdName.push(cmdName[i]);
                                }
                            }
                        }
                        basel = mCmdName.length;
                        for(let i = 0; i < basel; i++){
                            description.push(`-> **${sdPrefix}${mCmdName[i]}**`)
                            description.push(`${mCmdDesc[i]}\n`)
                        }
                        description.toString().replace(`,`,`\n`)
                        let descEmb = new Discord.MessageEmbed()
                            .setAuthor(category, Lyuca.user.avatarURL())
                            .setDescription(description)
                            .setColor(`#${c1}${c2}${c3}`)
                            .setFooter(`Fun fact: There is an actual Santa Claus university.`)
                        return message.channel.send(descEmb)
                    })
                    .catch((e) => {
                        m.delete();
                        return message.channel.send(`The way I see it there are 2 reasons why this code was just ran. Either you didn't react, or I was programmed by a complete retard.`);
                    })
            })
        }
        blah();
    }
}