module.exports = {
    name:`manipulate`,
    description: `Manipulates`,
    execute(Discord, message, Lyuca, sdPrefix)   {
        if(message.guild.id == `638456739506814976` || message.author.id == `252529231215460353` || message.guild.id == `700087512026316811`)
        {
            let name = message.content.split(` `)
                temp = name.shift()
                temp = name.shift()
                name = name.join().replace(/\,/g,` `)
            let manipulated = message.mentions.members.first();
            manipulated.setNickname(`Manipulated by ${name}`)
        }
    }
}