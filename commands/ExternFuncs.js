module.exports = {
    verificationchannel: async function (message, h) {
        const filter = response => {
            return response.author == message.author
        }
        message.channel.send(`So you wish to edit the Verification Channel? Alright, please provide the ID of thechannel you want to change it to.`)
        message.channel.awaitMessages(filter, {max: 1, time:60000})
        .then(async function (cArgument) {
            let con = cArgument.first().content.replace(/[<#>]/g,``);
            let ch = message.guild.channels.cache.find(c => c.id == con);
            h.update({ verificationchannel:ch.id}, {where: {serverId: message.guild.id}})
            return message.channel.send(`Designated channel has been updated to ${ch}.`)
        })
    },
    verificationrole: async function (message, h) {
        const filter = response => {
            return response.author == message.author
        }
        message.channel.send(`So you wish to edit Verification Role? Alright, please provide the ID of the role you want to change it to.`)
        message.channel.awaitMessages(filter, {max: 1, time:60000})
        .then(async function (cArgument) {
            let con = cArgument.first().content.replace(/[<@&>]/g,``);
            let r = message.guild.roles.cache.find(r => r.id = con)
            h.update({ verificationrole:r.id}, {where: {serverId: message.guild.id}})
            return message.channel.send(`Designated channel has been updated to ${r}.`)
        })
    },
    starboardchannel: async function (message, h) {
        const filter = response => {
            return response.author == message.author
        }
        message.channel.send(`So you wish to edit Starboard Channel? Alright, please provide the ID of the channel you want to change it to.`)
        message.channel.awaitMessages(filter, {max: 1, time:60000})
        .then(async function (cArgument) {
            let con = cArgument.first().content.replace(/[<#>]/g,``);
            let ch = message.guild.channels.cache.find(c => c.id == con);
            h.update({starboardchannel:ch.id}, {where: {serverId: message.guild.id}})
            return message.channel.send(`Designated channel has been updated to ${ch}.`)
        })
    },
    starboardemote: async function (message, h) {
        const filter = response => {
            return response.author == message.author
        }
        message.channel.send(`So you wish to edit Staboard React Emote? Alright, please use the emote you want to be the reaction emote.`)
        message.channel.awaitMessages(filter, {max: 1, time:60000})
        .then(async function (cArgument) {
            let emote = cArgument.first().content;
            let con = emote.split(':');
            con = con[2].replace(/[<>]/g,'');
            h.update({ starboardemote:con}, {where: {serverId: message.guild.id}})
            return message.channel.send(`Starboard reaction emote has been updated to ${emote}`)
        })
    },
    imagelogchannel: async function (message, h) {
        const filter = response => {
            return response.author == message.author
        }
        message.channel.send(`So you wish to edit Image Logging Channel? Alright, please provide the ID of the channel you want to change it to.`)
        message.channel.awaitMessages(filter, {max: 1, time:60000})
        .then(async function (cArgument) {
            let con = cArgument.first().content.replace(/[<#>]/g,``);
            let ch = message.guild.channels.cache.find(c => c.id == con);
            h.update({ imagelogchannel:ch.id}, {where: {serverId: message.guild.id}})
            return message.channel.send(`Designated channel has been updated to ${ch}.`)
        })
    },
    KickRoles: async function(message, member){
        let lRoles  = member.roles.cache.map(r => r.id);
        let lString = lRoles.toString()
        let list = await roles.create({
            uid: member.id,
            sid: message.guild.id,
            rid: lString,
        })
    },
    FindMember: function(base, target){
        let tFinal = target.toString().replace(/,/g,' ');
        if(!tFinal) return null;
        let h = base.mentions.members.first() || base.guild.members.cache.find(m => m.id == tFinal|| m.user.username.toLowerCase().match(tFinal) || (m.nickname != null && m.nickname.toLowerCase().match(tFinal)));
        return h
    },
    GetRandomColour(){
        let c1 = Math.floor(Math.random() * 256).toString(16)
        let c2 = Math.floor(Math.random() * 256).toString(16)
        let c3 = Math.floor(Math.random() * 256).toString(16)
        return `#${c1}${c2}${c3}`;
    },
}