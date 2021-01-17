module.exports = {
    name: `roll`,
    description: `-f Rolls a die, or dice, with a side number of your choosing.`,
    execute(Discord, message, Lyuca, sdPrefix)  {
        let numbers = message.content.substr(sdPrefix.length + 5 ).split(`d`)
        let diceNum = numbers[0]
        let sideNum = numbers[1]
        let rolls = []
        if (sideNum && diceNum)
        {
            if(diceNum < 26)
            {
                if(sideNum < 4294967296)
                {
                    for(let i = 0 ; i < diceNum ; i++)
                    {
                        let roll = Math.floor(Math.random() * sideNum + 1)
                        rolls.push(roll)
                    }
                    let sRoll = ``;
                    for (let i = 0; i < rolls.length; i++)
                    {
                        sRoll = `${sRoll}\nD${i + 1} - ${rolls[i]}`
                    }
                    return message.channel.send(`You rolled:\n ${sRoll}`)         
                }
                else{
                    return message.channel.send(`Cannot have more than 4294967295 sides.`)
                }
            }
            else {
                return message.channel.send(`Cannot roll more than 100 dice.`)
            }
        }
        else {
            let errEmbed = new Discord.MessageEmbed()
            .setTitle(`You must provide arguments! Example:`)
            .attachFile(`./images/examples/rollexample.png`)
            .setImage(`attachment://rollexample.png`)
            .setColor(`#00FFAA`)
        return message.channel.send(errEmbed)
        }
    }
}