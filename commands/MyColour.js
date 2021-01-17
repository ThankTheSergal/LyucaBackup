module.exports = {
    name: `mc`,
    description: `-f Returns the colour of your highest role.`,
    execute(Discord, message, Lyuca, sdPrefix)  {
        let pr = message.mentions.roles.first()
        if(pr) {
            let colour = pr.color.toString(16).toUpperCase()
            return message.channel.send(`The role you pinged is \`${pr.name}\`. Its colour code is: \`#${colour}\``)
        }
        else {
            let userroles = message.member.roles.cache;
            let role = null
            let role2
            let loopc = 250
            while(!role){
                role = userroles.find(r => r.position == loopc);
                if(role && role.color == 0){
                    role2 = role;
                }
                loopc--
            }
            let colour = role.color.toString(16).toUpperCase()
            if(role2){
                return message.channel.send(`Your highest role is \`${role2.name}\`. Your highest coloured role is \`${role.name}\`, the colour of which is: \`#${colour}\``)
            }
            return message.channel.send(`Your highest role is \`${role.name}\`, the colour of which is: \`#${colour}\``)
        }
    }
}


