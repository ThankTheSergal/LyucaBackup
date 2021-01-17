module.exports = {
    name: `lv`,
    description: '-f Gives you incentive to be active.',
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr) {
        async function blah(){
            let uLv = DatabaseArr[4];
            let gLv = DatabaseArr[5];
            let sLv = DatabaseArr[6];
            let mode = msgArr.shift();
            const ex = require('./ExternFuncs');
            let colour = ex.GetRandomColour();
            let table, lEmb, description;
            switch(mode){
                case 'global':
                    table = await gLv.findOne({where: {uid: message.author.id}});
                    description = `Level: ${table.dataValues.level}\nCurrent XP: ${table.dataValues.xpCurrent}\nXP required: ${table.dataValues.xpToNextLevel}`;
                    break;
                case 'local':
                    table = await uLv.findOne({where: {uid: message.author.id, gid: message.guild.id}});
                    description = `Level: ${table.dataValues.level}\nCurrent XP: ${table.dataValues.xpCurrent}\nXP required: ${table.dataValues.xpToNextLevel}`; 
                    break;
                case undefined:
                    return message.channel.send('You must specify the mode. Either \`Local\` or \`lobal\`.')         
            }
            lEmb = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL())
                .setDescription(description)
                .setColor(colour)
                .setFooter(`wip`)
                .setTimestamp()
            return message.channel.send(lEmb);
        }
        blah();
    }
}