module.exports = {
    name: `settings`,
    description: `-m Check the current settings for a server.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr)  {
        async function blah() {
            let serverSettings = DatabaseArr[1];
            let externFuncs = require('./externFuncs.js')
            if (message.member.hasPermission(`ADMINISTRATOR`)) {
                const filter = (reaction, user) => {
                    return message.author.id == user.id;
                }
                let currentServer = message.guild.id;
                const h = await serverSettings.findOne({ where: { serverid: currentServer } });
                if (h){
                    let Ly = message.guild.members.cache.find(m => m.id == `647232151049338880`)
                    let role = null
                    let loopc = 250
                    while(role == null){
                        role = Ly.roles.cache.find(r => r.position == loopc)
                        if(role != null) {
                            if(role.color == 0){
                            role = null;
                            }
                        }
                        loopc--
                    }
                    let vCh = message.guild.channels.cache.find(c => c.id == h.verificationchannel)
                    let sCh = message.guild.channels.cache.find(c => c.id == h.starboardchannel)
                    let iCh = message.guild.channels.cache.find(c => c.id == h.imagelogchannel)
                    let vR = message.guild.roles.cache.find(r => r.id == h.verificationrole)
                    let sEmb = new Discord.MessageEmbed()
                        .setAuthor(`Server Settings`, Lyuca.user.avatarURL())
                        .setDescription(`Settings currently available:

                        -> **Verification / Welcome Channel**
                        This is the channel that a welcome message will be displayed, or where new members will have to be verified.
                        The current channel is set to: ${vCh}
                        To edit this, react with: 1️⃣

                        -> **Verification Role**
                        This is the role which will be given to members upon verification.
                        The current role is set to: ${vR}
                        To edit this, react with: 2️⃣

                        -> **Starboard Channel**
                        This is the channel where starboarded(?) messages will be sent.
                        The current channel is: ${sCh}
                        To edit this, react with: 3️⃣

                        -> **Starboard Reaction Emote**
                        This is the emote that will trigger a starboarded(?) message.
                        The current emote is: ${h.starboardemote}
                        To edit this, react with: 4️⃣

                        -> **Image Log Channel**
                        This is the channel that will log any image sent within a channel that the bot has access to.
                        The current channel is: ${iCh}
                        To edit this, react with: 5️⃣

                        -> **Duplicate Message Limit**
                        This is the set limit to how many duplicate messages a member can send before action is taken.
                        The current limit is: ${h.duplicatelimit}
                        To edit this, react with: 6️⃣
                        `)
                        .setColor(role.color)
                        .setFooter(`WIP - All of these are completely optional, and are set to NULL by default.`)
                    let m = await message.channel.send(sEmb);
                        m.react(`1️⃣`)
                        .then(() => m.react(`2️⃣`))
                        .then(() => m.react(`3️⃣`))
                        .then(() => m.react(`4️⃣`))
                        .then(() => m.react(`5️⃣`))
                        .then(() => m.react(`6️⃣`))
                        m.awaitReactions(filter,{max: 1, time: 30000, errors:[`time`]})
                        .then((collected) => {
                            m.delete();
                            let emote = collected.first()._emoji.name;
                            let argument
                            if(emote == `1️⃣`){
                                argument = `verificationchannel`;
                            }
                            else if(emote == `2️⃣`){
                                argument = `verificationrole`;
                            }
                            else if(emote == `3️⃣`){
                                argument = `starboardchannel`;
                            }
                            else if(emote == `4️⃣`){
                                argument = `starboardemote`;
                            }
                            else if(emote == `5️⃣`){
                                argument = `imagelogchannel`;
                            }
                            else if(emote == `6️⃣`){
                                return message.channel.send(`This part is incomplete sorry.`)
                            }
                            else return message.channel.send(`You didn't use a valid reaction.`)
                            externFuncs[argument](message, h);
                        })
                        .catch((e) => {
                            message.channel.send(`Insert joke about you being slow. You're not worth my time to think of something even mildly good.`)
                        })
                }
                else return message.channel.send(`The server could not be found, try initializing.`)
            }
            else return message.channel.send(`I'm sorry, but it appears you lack the permissions. You need to have admin perms to use this command.`)
        }
    blah();
    },
};