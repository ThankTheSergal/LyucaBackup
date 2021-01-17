module.exports = {
    name:`av`,
    description:`-f Fetches the avatar of the author, or the first mentioned user.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr){
    function SendEmbed(arr, url){
        let avatarEmbed = new Discord.MessageEmbed()
            .setDescription(arr[0])
            .addField(`----------------------------`, arr[1])
            .setColor("#7000FF")
            .setImage(url)
            .setURL(url)
        return message.channel.send(avatarEmbed);
        }
    const request = require('request')
    const ex = require('./ExternFuncs')
    let lines = [];
    let ext;
    let av;
    if(msgArr[0] == `server`){
        av = message.guild.iconURL({format: ext, size: 512})
        lines[0] = `${message.guild.name}'s Icon:`
        lines[1] = `View the full icon [here](${av})`
        return SendEmbed(lines, av);
    }
    let target = ex.FindMember(message, msgArr) || message.member;
        av = target.user.avatarURL({format:'png'}).replace('.png', '')
        av = request(av).on('response', res => {
            ext = res.headers['content-type'].split('/')[1];
            av = target.user.avatarURL({format: ext, size: 512})
            lines = [`${target}'s avatar:`, `View the full avatar [here](${av})`]
            SendEmbed(lines, av);
            return
        });
    }
};