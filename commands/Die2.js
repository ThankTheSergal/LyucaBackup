module.exports = {
    name: `wake`,
    description: `-u Wake up Lyuca`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr) {
        async function blah() {
            if(message.author.id == `252529231215460353`){
                message.channel.send(`Ok ok ok. I'm awake, now fuck off`).then(() => {
                    return Lyuca.user.setPresence({status: "online"})
                })
            }
            else {
                let msg = await message.channel.send(`Why the fuck you disturbing me in my sleep?`)
            }
        }
        blah();
    }
}