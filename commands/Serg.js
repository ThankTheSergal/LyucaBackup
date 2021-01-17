module.exports = {
    name: 'serg',
    description: '-f Fetches an image from serg.al',
    execute(Discord, message, Lyuca, sdPrefix, fs) {
        async function blah() {
            const request = require('request');
            let re = request('https://serg.al/')
            
            re.on('response', response => {
                console.log('response')
                extension = response.headers['content-type'].split('/')[1]
                counter = fs.readdirSync('./images/sergals/').length
                response.pipe(fs.createWriteStream('./images/sergals/placeholder')).on('finish', () => {
                    const path = `./images/sergals/placeholder`;
                    if(!fs.existsSync(path)) {
                        return message.channel.send(`Something went wrong because my code sucks.`)
                    } 
                fs.renameSync(`./images/sergals/placeholder`, `./images/sergals/Sergal${counter}.${extension}`)
                const ex = require('./ExternFuncs');
                let co = ex.GetRandomColour();
                let sergalEmbed = new Discord.MessageEmbed()
                    .setDescription(`Sergals for all!`)
                    .addField(`----------------------------`, `Want the site instead? [Click here.](https://serg.al/)`)
                    .attachFiles(`./images/sergals/Sergal${counter}.${extension}`)
                    .setImage(`attachment://Sergal${counter}.${extension}`)
                    .setColor(co)
                    message.channel.send(sergalEmbed);
                })    
            })
            re.on('error', err => {
                let images = fs.readdirSync('./images/sergals/');
                let sImage = images[Math.floor(Math.random() * images.length)]
                let errEmb = new Discord.MessageEmbed()
                    .setAuthor(`There was an error connecting.`, Lyuca.user.avatarURL())
                    .setDescription(`Here's on from my folder, check to make sure the site isn't down [HERE](https://serg.al/).`)
                    .attachFiles(`./images/sergals/${sImage}`)
                    .setImage(`attachment://${sImage}`)
                    .setColor(`#FF5555`)    
                try{
                    message.channel.send(errEmb)
                }
                catch(e){
                    console.log(e)
                    return message.channel.send('Helpful error here.')
                }
            })
        }
        blah();
    },
}