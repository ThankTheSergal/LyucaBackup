module.exports = {
    name: 'sc',
    description: `Changes the colour of your role.`,
    execute(Discord, message, Lyuca, sdPrefix)  {
        if(message.author.id == `252529231215460353` || message.author.id == `403268129339342870` || message.member.hasPermission(`MANAGE_ROLES`) || message.guild.id == `643844726419750922`)
        {
            if (message.author.id != `252529231215460353` && message.guild.id == `456629687938973697`){
                return;
            }
            const ex = require('./ExternFuncs')
            let colour = message.content.toLowerCase().split(` `).pop();
            switch(colour){
                case 'red':
                    colour = '#FF5555';
                    break;
                case 'orange':
                    colour = '#FF8700';
                    break;
                case 'yellow':
                    colour = '#FBFF00';
                    break;
                case 'green':
                    colour = '#00FF00';
                    break;
                case 'teal':
                    colour = '#00FFF7';
                    break;
                case 'blue':
                    colour = '#0000FF';
                    break;
                case 'purple':
                    colour = '#B900FF';
                    break;
                case 'lavender':
                    colour = '#8D8DE7';
                    break;
                case 'indigo':
                    colour = '#7000FF';
                    break;
                case 'skyy':
                    colour = '#217AFF';
                    break;
                case 'random':
                    colour = ex.GetRandomColour();
                    break;
                case 'greyscale':
                    let g = Math.floor(Math.random() * 256).toString(16);
                    colour = `#${g}${g}${g}`;
                    break;
            }
            if (colour == `ly.sc` || !colour){
                return message.reply(`You need to provide a colour dipshit. Also, because you're too stupid to remember to put a colour into the command, you might benefit from knowing you need the colour to be hex format. Are you ready to see what that looks like? Ok follow real closely. Put a hashtag, that's "#" btw, infront of 6 digits of 0-9 or A-F.`)
            }
            let validColour = parseInt(`0x${colour.replace(`#`,``)}`)
            if(!isNaN(validColour) && validColour < 0xFFFFFF && validColour > 0){
                let userroles = message.member.roles.cache;
                let role = null
                let loopc = 250
                while(role == null){
                    role = userroles.find(r => r.position == loopc)
                    if(role != null) {
                        if(role.color == 0){
                        role = null;
                        }
                    }
                    if(loopc == 0){
                        return message.channel.send(`No role with any colour was found. Please make sure you have at least one coloured role.`)
                    }
                    loopc--
                }
                role.setColor(colour)            
            }
            else{
                return message.channel.send(`You must provide an actual colour value. This means either a valid hex code, or a number below \`16777215\` or above \`0\`.`)
            }
        }
    }
}