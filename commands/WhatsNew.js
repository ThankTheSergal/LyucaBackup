module.exports = {
    name:`news`,
    description:`-u Explains what's new in the latest version.`,
    execute(Discord, message, Lyuca){

    let v210 = `What's new?
    -Added a kick command.
    -Added a proper help command.
    -Roulette 2.0, roles are now saved upon kicking.
    -Made the ban command a little better.
    -CBT.
    -Moment of silence is back, and meaner than ever.
    -Added a quoting thing(?)
    -Changed a few commands to accept IDs as well as pings.
    -Fixed some bugs.
    -Definitely added more than I fixed.`

    let v211 = `What's new?
    What's new?
    -Added a few more ping responses, 8ball reponses, and trigger-reply responses.
    -Changed Avatar command from avatar -> av
    -Certain commands can now take text names.
    -Fixed the timestamp bug on the quote command.`
    
    let v212 = `What's new?
    -Fixed the avatar command returning someone else's avatar.
    -Removed the ly.rc command and moved random to an option for ly.sc as well as a few predefined colours.
    -Fixed ly.serg so if the serg.al is down you still get a serg.
`
        let newsEmb = new Discord.MessageEmbed()
            .setAuthor(`Lyuca Version 2.1.2`, Lyuca.user.avatarURL())
            .setDescription(v212)
            .setColor(`#7000FF`)
            .setFooter(`More to come soon. Maybe. Please give me more ideas, I'm as creative as a brick.`)
            message.channel.send(newsEmb)
    }
}