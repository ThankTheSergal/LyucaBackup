module.exports = {
    name: `8ball`, //Birdyhunter
    description: `-f Just a generic 8ball game, but with Lyuca's assholery.`,
    execute(Discord, message, Lyuca, sdPrefix)  {
        let question = message.content.substr(sdPrefix.length + 5)
        if(question)
        {
            let answers = [
                "It is certain.",
                "Without a doubt.",
                "Yes, definetly.",
                "Yes.",
                "Of course. I thought it was rather obvious.",
                "Unfortunately, yes.",
                "Does a bear shit in the woods?",
                "Dunno, don't care either.",
                "Bruh.",
                "I don't fucking know? Ask an actual person you mongoloid.",
                "Why the fuck would I know?",
                "No.",
                "Fuck no.",
                "Very doubtful.",
                "My sources say no.",
                "lmao imagine if there was even the slightest of chances.",
                "Hard no on that one chief.",
                "I shouldn't lie to you, the answer isn't very good.",
            ]
            let response = answers[Math.floor(Math.random() * answers.length)];
            message.channel.send(response)  
        }
        else {
            let noEmbed = new Discord.MessageEmbed()
            .setTitle(`You need to ask a question first. See the example:`)
            .attachFiles(`./images/examples/8ballexample.png`)
            .setImage(`attachment://8ballexample.png`)
            .setColor(`#00FFAA`)
        return message.channel.send(noEmbed)
        }
    }
}