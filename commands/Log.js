module.exports = {
    name: `log`,
    description: `-m Keeps an eye on those fuckers.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr)  {
        async function entry () {
            let lyucaOverwatch = DatabaseArr[2];
            if(message.member.hasPermission(`KICK_MEMBERS`) || message.author.id == `252529231215460353`)
            {
                let g = message.guild.id;
                let u = message.mentions.users.first().id;
                let l = await lyucaOverwatch.findOne({where: {uid: u}});
                if(l){
                    return message.channel.send(`This user is already being logged.`);
                }
                let rGuild = Lyuca.guilds.cache.get(`670444482650701824`);
                rGuild.channels.create(message.mentions.users.first().tag, {type: 'text', parent: '687202237373612034'})
                .then((rChannel) => {
                    lyucaOverwatch.create({
                        uid: u,
                        sid: g,
                        cid: rChannel.id,
                    });           
                })
            }
        }
        entry()
    }
}