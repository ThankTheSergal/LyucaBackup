module.exports = {
    name: `ping`,
    description: `-u Tests your ping.`,
    execute(Discord, message, Lyuca) {

        function msToTime(ms) {
            days = Math.floor(ms / 86400000);
            daysms = ms % 86400000;
            hours = Math.floor(daysms / 3600000);
            hoursms = ms % 3600000;
            minutes = Math.floor(hoursms / 60000);
            minutesms = ms % 60000;
            sec = Math.floor(minutesms / 1000);
        
            let str = "";
            if (days) str = str + days + "d ";
            if (hours) str = str + hours + "h ";
            if (minutes) str = str + minutes + "m ";
            if (sec) str = str + sec + "s";
        
            return str;
        }

        async function blah() {
            let c1 = Math.floor(Math.random() * 256).toString(16)
            let c2 = Math.floor(Math.random() * 256).toString(16)
            let c3 = Math.floor(Math.random() * 256).toString(16)
            let botMsg = await message.channel.send(":ping_pong: Pinging...")
            botMsg.edit({
                embed: {
                    description: [
                        `**Server**: \`${(botMsg.createdAt - message.createdAt)}ms\``,
                        `**API**:    \`${Math.round(Lyuca.ws.ping)}ms\``,
                        `**Uptime**: \`${(msToTime(Lyuca.uptime))}\``
                    ].join("\n"),
                    color: `#${c1}${c2}${c3}`,
                    footer: {
                        text: `Requested by ${message.author.tag}`,
                        icon_url: message.author.avatarURL()
                    },
                    timestamp: new Date()
                }
            }).catch(() => botMsg.edit("Error: Missing permissions."));
            botMsg.edit(":ping_pong: Ping times:");
        }
        blah();
    }
}