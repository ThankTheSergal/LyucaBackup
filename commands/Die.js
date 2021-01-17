module.exports = {
    name: `die`,
    description: `-u Kill Lyuca.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr) {
        async function blah() {
            if(message.author.id == `252529231215460353`){
                message.channel.send(`Ok, going to sleep now.`).then(() => {
                    Lyuca.user.setPresence({status: "invisible"})
                    return message.channel.send(`:zzz:`);
                })
            }
            else {
                let msg = await message.channel.send(`Ok, going to sleep now.`)
                let time = Date.now();
                let fuckYou = setInterval(() => {
                    if(time + 1000 < Date.now()){
                        msg.edit(`Haha, just kidding. Fuck off.`)
                        clearInterval(fuckYou)
                    }
                }, 50);
            }
        }
        blah();
    }
}