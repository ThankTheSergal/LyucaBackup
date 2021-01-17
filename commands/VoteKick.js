module.exports = {
    name: `votekick`,
    description: `-m Starts a timed vote to kick.`,
    execute(Discord, message, Lyuca, sdPrefix, fs)  {
        async function blah(){
            const Canvas = require('canvas');
            if (message.member.hasPermission(`BAN_MEMBERS`)){
                let victim = message.mentions.users.first();
                let vThresh = message.content.substr(sdPrefix.length + 9).split(` `).pop();
                if (vThresh > 2 && vThresh < 11)
                {
                    const vkImage = Canvas.createCanvas(404, 74);
                    const ctx = vkImage.getContext('2d');
                    const background = await Canvas.loadImage(`./images/examples/votekickexample.png`)
                    ctx.drawImage(background, 0, 0, vkImage.width, vkImage.height)
                    ctx.font = '18px sans-serif';
                    // Select the style that will be used to fill the text in
                    ctx.fillStyle = '#ffffff';
                    // Actually fill the text with a solid color
                    ctx.fillText(victim.tag, vkImage.width / 11, vkImage.height / 2.7);
                    const finalimage = new Discord.MessageAttachment(vkImage.toBuffer(), `VoteKick.png`);
                    const sentmessage = await message.channel.send(finalimage)
                          sentmessage.react('✅')
                          .then( () => {
                            const filter = (reaction) => {
                                return reaction.emoji.name === '👌' && reaction.message.id == sentmessage.id;
                            };
                              sentmessage.awaitReactions(filter, { max: vThresh, time: 60000, errors: ['time']})
                              /*.then(collected => {
                                  console.log(collected)
                              })
                              .catch(error => {
                                  console.log(error)
                              })*/
                        })
                }
                else{
                    return message.reply(`Cannot have a threshold of less than 3 or greater than 10`)
                }
            }
        }
        blah();
    }
};
