const Discord = require("discord.js");
const readline = require('readline');
const fs = require("fs");
const {token, sdPrefix, adPrefix } = require("./botconfig.json");
const Lyuca = require("./index.js");
const request = require('request');
const { count } = require("console");
module.exports = {
//-------------------------------------------------------------------------------------------------// MESSAGE LOG FUNCTION
    hellmoSpaghetti: async function(Lyuca)
    {
        let randFunc = 7
        let interval = setInterval (function ()
        {
            randFunc = Math.floor((Math.random() * 9));
            if (randFunc == 0)
            {
                randomResult = Math.floor(Math.random() * 10);
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`Actual picture of Hellmo's code.`)
                .attachFile(`./images/hellmoServer/${randomResult}.jpg`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://${randomResult}.jpg`);
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed);
            }
            if (randFunc == 1)
            {
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`Where's your original code? I can't find it.`)
                .attachFile(`./images/billGates/confusion.jpg`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://confusion.jpg`);
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed);
            }
            if (randFunc == 2)
            {
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`David Martini, frustrated, screams at his screen while he contemplates what '//code' means`)
                .attachFile(`./images/billGates/davie.jpg`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://davie.jpg`);
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed);
            }
            if (randFunc == 3)
            {
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`Hellmo after he got banned from Funny Meme's server`)
                .attachFile(`./images/billGates/hellmo3.jpg`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://hellmo3.jpg`);
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed);
            }
            if (randFunc == 4)
            {        
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`Me stealing all of Hellmo's scwibs`)
                .attachFile(`./images/billGates/stealingscwibs.jpg`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://stealingscwibs.jpg`)
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed);
            }
            if (randFunc == 5)
            {
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`Me after getting away with stealing Hellmo's scwibs`)
                .attachFile(`./images/billGates/stoleTheScwibs.jpg`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://stoleTheScwibs.jpg`);
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed);
            }
            if (randFunc == 6)
            {
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`Joey presenting his new scripts to the shitters, knowing nothing, they think it's good`)
                .attachFile(`./images/billGates/hellmo4.png`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://hellmo4.png`);
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed) 
            }
            if (randFunc == 7)
            {
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`Pictured: Hellmo dancing on the moon after throwing so many people into the sun that it simply vanishes.`)
                .attachFile(`./images/billGates/hellmo.gif`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://hellmo.gif`);
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed) 
            }
            if (randFunc == 8)
            {
                let hellmoEmbed = new Discord.RichEmbed()
                .setTitle(`Richard and Awisha after the boyfriend has successfully been replaced.`)
                .attachFile(`./images/billGates/dickandawisha.jpg`)
                .setColor(`#00FFAA`)
                .setImage(`attachment://dickandawisha.jpg`);
                Lyuca.channels.get(`638456739506814981`).send(hellmoEmbed) 
            }
        }, 7 * 24 * 60 * 60000);        
    },
    //-------------------------------------------------------------------------------------------------// BILL GATES FUNCTION
    billGates: async function(Lyuca)
    {
        let todayDate = new Date().getDay();

        if (todayDate == 5)
        {
            let interval2 = setInterval (function () 
            {
            let billGatesEmbed = new Discord.RichEmbed()
                .attachFile(`./images/billGates/billMyBoy.jpg`)
                .setImage(`attachment://billMyBoy.jpg`);
            Lyuca.channels.get(`638456739506814981`).send(billGatesEmbed)
            }, 300 * 1000); 
        }
        while (todayDate != 5)
        {
            todayDate = new Date().getDay();
            if (todayDate == 5)
            {
                return this.billGates;
            }
        }
    },
//-----------------------------------------------------------------------------------------------------------> Stuff I wan't to to keep goes below here.
    chatOverride: async function (line, Lyuca, consoleSettings, input) {
         if (line.toLocaleLowerCase() == `help`){
            consoleSettings.targetId = ''
            consoleSettings.targetType = ''
            let g = await Lyuca.guilds.cache.map(guild => guild.name);
            console.log(`\nServers you can message:`)
            for(let i = 0 ; i < g.length ; i++) {
                console.log(`${i}) ${g[i]}`)
            }          
            input.question(`\nWhich server would you like to message?\n`, (ServerToMessage) => {
                let ServerNumber = parseInt(ServerToMessage)
                if(isNaN(ServerNumber)){
                    console.log(`Was not a number, That's because I plan to make this code better.`)
                }
                else{
                    let TargetGuild = Lyuca.guilds.cache.find(guild => guild.name == g[ServerNumber])
                    let channelArray = TargetGuild.channels.cache.map(c => c.name)
                    console.log(`\nChannels within ${TargetGuild.name} that you can message:`)
                    for(let i = 0 ; i < channelArray.length ; i++){
                        console.log(`${i}) ${channelArray[i]}`)
                    }
                    input.question(`\nWhich channel would you like to message?\n`, (ChannelToMessage) => {
                        let ChannelNumber = parseInt(ChannelToMessage)
                        if(isNaN(ChannelNumber)) {
                            console.log(`Was not a number, That's because I plan to make this code better.`)
                        }
                        else {
                            let TargetChannel = TargetGuild.channels.cache.find(c => c.name == channelArray[ChannelNumber])
                            consoleSettings.targetId = TargetChannel.id
                            consoleSettings.targetType = 'message'
                            console.log(`\nYou are now messaging the channel #${TargetChannel.name}, within the server ${TargetGuild.name}.`)
                        }
                    })
                }
            })
        }
        else if(consoleSettings.targetType == `message`) {
            Lyuca.channels.cache.get(consoleSettings.targetId).send(line)
        }
        else if(consoleSettings.targetType == `dm`) {
            Lyuca.users.cache.get(consoleSettings.targetId).send(line)
        }
    },
    trueEyes: async function (Discord, message, Lyuca) {
        if(message.channel.type == `dm`) return
        let image = message.attachments.first().url;
        let timestamp = new Date()
        let cheeseEmbed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.tag}**:\nUploaded ${message.attachments.size} image(s) at:\n${timestamp}`)
            .addField(`View the image(s) here:`,`[Click to view](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)
            .addField(`Here is the first image they sent. \n (If there is no image, a video / other file was sent)`,`↓ ↓ ↓`)
            .setColor(`#00FFAA`)
            .setImage(`${image}`)
        Lyuca.channels.cache.get('671521743499821087').send(cheeseEmbed)
    },
    eyes: async function (Discord, message, Lyuca, eyesDb) {
        if(message.channel.type == `dm`) return
        let h = await eyesDb.findOne({where: {serverid: message.guild.id}});
        if(h) {
            let h2 = h.imagelogchannel;
            if(h2) {
                let image = message.attachments.first().url;
                let timestamp = new Date();
                let cheeseEmbed = new Discord.MessageEmbed()
                    .setDescription(`**${message.author.tag}**:\nUploaded ${message.attachments.size} image(s) at:\n${timestamp}`)
                    .addField(`View the image(s) here:`,`[Click to view](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)
                    .addField(`Here is the first image they sent. \n (If there is no image, a video / other file was sent)`,`↓ ↓ ↓`)
                    .setColor(`#00FFAA`)
                    .setImage(`${image}`)
                Lyuca.channels.cache.get(h2).send(cheeseEmbed)         
            }
        }        
    },
    lyucaSupportCreate: async function (Discord,message,Lyuca, lyucaSupportDb) {
        let tid = message.author.id
        let s = await lyucaSupportDb.findOne({where: {uid: tid}})
        if (!s)
        {
            let h = await lyucaSupportDb.create({
                uid: tid,
                uname: message.author.username,
                cid: null,
            });
            let sGuild = Lyuca.guilds.cache.get(`670444482650701824`); //Lyuca Support server ID.
                sGuild.channels.create(message.author.tag, {type: `text`, parent: `670444580340236288`})
                .then(async function(nChannel) {
                    let h1 = await lyucaSupportDb.findOne({where: {uid: tid}});
                    if (h1){
                        const h2 = await lyucaSupportDb.update({cid: nChannel.id}, {where: {uid: tid}});
                    }
                    else {
                        return console.log(`Failed to find the database after creating it.`);
                    }
                })
                .then(async function() {
                    let h = await lyucaSupportDb.findOne({where: {uid: tid}})
                    let mchannel = Lyuca.channels.cache.find(channel => channel.id = h.cid)
                    let date = new Date()
                    let newChannelEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${message.author.tag}`, message.author.avatarURL)
                        .setDescription(`Started a new thread at ${date}\n\n Here's what they had to say: \n "${message.content}"`)
                        .setThumbnail(message.author.avatarURL())
                        .setFooter(`Lyuca Support™`)
                        .setColor(`#7000FF`)
                        .setTimestamp()       
                    let c = Lyuca.channels.cache.get(mchannel.id)
                        c.send(`<@!252529231215460353>, someone new is here for you.`)
                    .then(() => {
                        c.send(newChannelEmbed)
                    })
                })
        }
        else {
            let mChannel = s.cid;
            let mchannel2 = Lyuca.channels.cache.find(channel => channel.id == mChannel)
            if (!mchannel2) return s.destroy();
            if (message.attachments.size > 0) {
                /*let receivedImages = message.attachments.map(image => image.url);
                console.log(receivedImages.length)*/
                const filter = response => {
                    return response.author.type != `bot`;
                } 
                let receivedImages = message.attachments.first().url
                    Lyuca.channels.cache.get(mchannel2.id).send(`\`\`\`Warning! This user has sent you ${message.attachments.size} image(s), would you like to see it? Yes / No\`\`\``)
                    Lyuca.channels.cache.get(mchannel2.id).awaitMessages(filter,{max: 2, time: 60000})
                    .then(uRes => {
                        if(uRes.last() == undefined) {
                            return console.log(`No response was given, or there was an error.`)
                        }
                        let ans = uRes.last().content.toLocaleLowerCase().replace(/\./g, ``)
                        if(ans == `yes.` || ans == `yes` || ans == 'y') {
                            if (message.content == ''){
                                let image = new Discord.MessageEmbed()
                                    .setDescription(`This is the image sent. Their message was empty otherwise.`)
                                    .setImage(receivedImages)
                                    .setColor(`#FF0000`)
                                    Lyuca.channels.cache.get(mchannel2.id).send(image)
                            }
                            else{
                                let image = new Discord.MessageEmbed()
                                .setImage(receivedImages)
                                .setColor(`#FF0000`)
                                Lyuca.channels.cache.get(mchannel2.id).send(image)
                            }
                        }
                        else if(ans == 'no.' || ans == 'no' || ans == 'n') {
                                message.channel.send(`I don't want to see your image. Sorry.`)
                        }
                    })
            }
            if (message.content != ''){
                let notNewEmbed = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag} says:`)
                .setDescription(`\n${message.content}`)
                .setThumbnail(message.author.avatarURL())
                .setFooter(`Lyuca Support™`)
                .setColor(`#7000FF`)
                .setTimestamp()      
            Lyuca.channels.cache.get(mchannel2.id).send(notNewEmbed)    
            }
        }
    },
    lyucaSupportReply: async function (message, Lyuca, lyucaSupportDb, sPrefix) {
        if(message.content.startsWith(`${sPrefix}contact`)){
            let h = message.content.split(' ').pop();
            let user = Lyuca.users.cache.find(u => u.id == h)
            if(!user){
                return message.channel.cache.send(`I could not find that user.`)
            }
            let s = await lyucaSupportDb.findOne({where: {uid: h}})
            if (s){
                return message.reply(`you already have a thread open with this user.`)
            }
            let sGuild = Lyuca.guilds.cache.get(`670444482650701824`);
                sGuild.channels.create(user.tag, {type: `text`, parent: `670444580340236288`})
                .then(async function (cChannel){
                    let variableNameHere = await lyucaSupportDb.create({
                        uid: user.id,
                        uname: user.username,
                        cid: cChannel.id,
                })
            })
        }
        if(message.content.startsWith(`${sPrefix}reply`))
        {
            let sChannel = message.channel.id;
            let s = await lyucaSupportDb.findOne({where: {cid: sChannel}})
            if(!s){
                return message.reply(`you're not in one of the support threads.`)
            }
            else {
                let sTarget = s.uid;
                let reply = message.content.substr(sPrefix.length + 6)
                if(message.attachments.size > 0 && reply != '') {
                    let replyEmbed = new Discord.MessageEmbed()
                        .setDescription(`${message.author.username} says: \n${reply}\n\n\n\nHere is an image they have attached:`)
                        .setThumbnail(message.author.avatarURL())
                        .setImage(message.attachments.first().url)
                        .setFooter(`Lyuca Support™`)
                        .setColor(`#00FFAA`)
                        .setTimestamp()       
                    Lyuca.users.cache.get(sTarget).send(replyEmbed)
                    .then(async function() {
                        message.delete()
                        message.channel.send(replyEmbed)
                    })
                }
                else if(message.attachments.size > 0 && reply == '') {
                    let replyEmbed = new Discord.MessageEmbed()
                        .setDescription(`${message.author.username} sent an image.`)
                        .setThumbnail(message.author.avatarURL())
                        .setImage(message.attachments.first().url)
                        .setFooter(`Lyuca Support™`)
                        .setColor(`#00FFAA`)
                        .setTimestamp()       
                    Lyuca.users.cache.get(sTarget).send(replyEmbed)
                    .then(async function() {
                        message.delete()
                        message.channel.send(replyEmbed)
                    })
                }
                else {
                    let replyEmbed = new Discord.MessageEmbed()
                        .setDescription(`${message.author.username} says: \n${reply}`)
                        .setThumbnail(message.author.avatarURL())
                        .setFooter(`Lyuca Support™`)
                        .setColor(`#00FFAA`)
                        .setTimestamp()       
                    Lyuca.users.cache.get(sTarget).send(replyEmbed)
                    .then(async function() {
                        message.delete()
                        message.channel.send(replyEmbed)
                    })
                }
            }
        }
        else if (message.content.startsWith(`${sPrefix}close`)) {
            let sChannel = message.channel;
            let s = await lyucaSupportDb.findOne({where: {cid: sChannel.id}})
            if(!s){
                return message.reply(`you're not in one of the support threads.`)
            }
            else {
                sTarget = s.uid;
                let closeEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username} has closed the thread. Thank you for contacting.`, message.author.avatarURL())
                    .setThumbnail(message.author.avatarURL())
                    .setFooter(`Lyuca Support™`)
                    .setColor(`#00FFAA`)
                    .setTimestamp()       
                Lyuca.users.cache.get(sTarget).send(closeEmbed)
                .then(async function() {
                                        let h = await lyucaSupportDb.destroy({where: {cid: sChannel.id}})
                    sChannel.delete()
                })
            }
        }
    },
    MessageLog: async function (Lyuca, message, lyucaOverwatch) {
        let h = await lyucaOverwatch.findOne({where: {uid: message.author.id}})
        if(message.channel.type == `dm`) return
        if(h && message.guild.id == h.sid){
            if(message.attachments.size > 0) {
            let a = message.attachments.first().url;
            let raiderLog = new Discord.MessageEmbed()
                .setAuthor(`${message.author.tag} <- Potential raider`, message.author.avatarURL())
                .setDescription(`[View Context](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)
                .addField(`${message.channel.name} of server: ${message.guild.name}`, `- > ${message.content}`)
                .setImage(a)
                .setColor(`#FF0000`)
                .setFooter(`Sent at`)
                .setTimestamp()
            Lyuca.channels.cache.get(h.cid).send(raiderLog)
            }
            else {
                let raiderLog = new Discord.MessageEmbed()
                .setAuthor(`Potential raider: ${message.author.tag} `, message.author.avatarURL())
                .setDescription(`Said in ${message.channel} of server: ${message.guild.name}\n\n "${message.content}"`)
                .addField(`View context:`, `[Here](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`)
                .setColor(`#FF0000`)
                .setFooter(`#${message.channel.name}`)
                .setTimestamp()
                Lyuca.channels.cache.get(h.cid).send(raiderLog)
            }
        }
        else return
    },
    EmporiumJoin: async function(member, Discord, serverSettings, Lyuca) {
        let Canvas = require(`canvas`)
        let subject = member.user;
        let g = member.guild;
        let e = ``;
        let mc = g.memberCount.toString();
            if(mc.endsWith(`1`)){
                e = `st`
            }
            else if(mc.endsWith(`2`)){
                e = `nd`
            }
            else if(mc.endsWith(`3`)){
                e = `rd`
            }
            else{
                e = `th`
            }
        const cheeseShop = Canvas.createCanvas(3114, 860);
        const ctx = cheeseShop.getContext('2d');
        const background = await Canvas.loadImage(`./images/Emporium/Tiled2.png`);
        ctx.drawImage(background, 0, 0, cheeseShop.width, cheeseShop.height);
        ctx.font = `250px sans-serif`;
        ctx.fillStyle = `#FFC042`;
        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 40;
        ctx.fillText(`Welcome!`, 670, 270);
        ctx.font = `150px sans-serif`;
        ctx.fillText(`${subject.username}`, 950, 530);
        ctx.fillText(`You are our ${mc}${e} member!`, 1100, 800);
        ctx.fillStyle = `#CDCDCD`;
        ctx.fillRect(2510, 70, 532, 532); //Avatar border
        ctx.shadowBlur = 0;
        ctx.fillStyle = `#303030`;
        ctx.fillRect(2520, 80, 512, 512) //Avatar Background
        const loadAvatar = await Canvas.loadImage(subject.avatarURL({format: `png`, size: 512}))
        ctx.drawImage(loadAvatar, 2520, 80, 512, 512)
        ctx.fillStyle = `#FF8400`;
        ctx.fillRect(0, 0, cheeseShop.width, 20); //Image border
        ctx.fillRect(0, 0, 20, cheeseShop.height);//Image border
        ctx.fillRect(0, cheeseShop.height - 20, cheeseShop.width, 20);//Image border
        ctx.fillRect(cheeseShop.width - 20, 0, 20, cheeseShop.height);//Image border
        const finalimage = new Discord.MessageAttachment(cheeseShop.toBuffer(), `WelcomeImage.png`);
        let c = await serverSettings.findOne({where: {serverid: member.guild.id}})
        if(!c){
            return console.log(`h`)
        }
        let WelcomeEmbed = new Discord.MessageEmbed()
            .setDescription(`Welcome to the server ${subject.tag}! If you are wondering how to access NSFW. Just wait 10 minutes you degenerate fuck.`)
            .setColor(`#FF8400`)
            .attachFiles(finalimage)
            .setImage(`attachment://WelcomeImage.png`)
        Lyuca.channels.cache.get(c.verificationchannel).send(WelcomeEmbed)
    },
    Emote: async function (Discord, reaction, Lyuca, serverSettings){
        let sbServer = await serverSettings.findOne({where: {serverid: reaction.message.guild.id}})
        if (sbServer)
        {
            if(sbServer.starboardchannel && sbServer.starboardemote)
            {
                if(reaction.emoji.id == sbServer.starboardemote)
                {
                    if (reaction.message.attachments.size > 0){
                       let h = reaction.message.attachments.first().url;
                       let pinEmbed = new Discord.MessageEmbed()
                       .setAuthor(`${reaction.message.author.username}`,reaction.message.author.avatarURL())
                       .setDescription(`The following message was brought to you by ${reaction.message.author}...\n\n"${reaction.message.content}"`)
                       .setColor(`#00FFAA`)
                       .setImage(h)
                       .addField(`**View Context:**`,`[Here](https://discordapp.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id})`)
                       .setFooter(`Sometimes, it just do be like that.`)
                       .setTimestamp()
                       Lyuca.channels.cache.get(sbServer.starboardchannel).send(pinEmbed)
                       .then(reaction.message.clearReactions())
                       .then(reaction.message.channel.send(`Comment has been added to <#${sbServer.starboardchannel}>`))  
                    }
                    else {
                        let pinEmbed = new Discord.MessageEmbed()
                        .setAuthor(`${reaction.message.author.username}`,reaction.message.author.avatarURL())
                        .setDescription(`The following message was brought to you by ${reaction.message.author}...\n\n"${reaction.message.content}"`)
                        .setColor(`#00FFAA`)
                        .addField(`**View Context:**`,`[Here](https://discordapp.com/channels/${reaction.message.guild.id}/${reaction.message.channel.id}/${reaction.message.id})`)
                        .setFooter(`Sometimes, it just do be like that.`)
                        .setTimestamp()
                        Lyuca.channels.cache.get(sbServer.starboardchannel).send(pinEmbed)
                        .then(reaction.message.reactions.removeAll())
                        .then(reaction.message.channel.send(`Comment has been added to <#${sbServer.starboardchannel}>`))                 
                    }   
                }
            }
        }
    },
    LyucaPing: async function (message){
        let responseArray = [
            "The fuck you want?",
            "No, fuck off.",
            "If you ping me one more time I'm going to become racist.",
            "Fuck you.",
            "I will straight up beat you more than your drunk father.",
            "Blocked and reported.",
            "You're the reason I think rape should be legal.",
            "You and your kind disgust me.",
            "Why are you even here?",
            "Do you want my cock in your ass?",
            "https://cdn.discordapp.com/attachments/639706647434100739/700496004163698758/Screenshot_20200323-2115302.png",
            "https://cdn.discordapp.com/attachments/639706647434100739/700496010543104090/received_231333597919932.jpeg",
            "https://cdn.discordapp.com/attachments/639706647434100739/700496071884931142/Screenshot_20200324-1417372.png",
            "https://cdn.discordapp.com/attachments/639706647434100739/700496101865816064/received_218900246159905.jpeg",
            "https://cdn.discordapp.com/attachments/639706647434100739/700496191917391892/received_273339086987932.png",
            "You literally kiss your dad on the lips.",
            "You are literally homosexual, fuck off.",
            "I'd fuck you, but I don't want HIV.",
            "How fucking lonely are you?",
            "Imagine being so lonely that you have to talk to a fucking bot.",
            "Please, just die. The world would be a better place.",
            "Glock or my cock, your choice.",
            "Fuck off, retard.",
            "God, don't you just hate minorities?",
            "Hey everyone, look at this fool. Talking to a fucking bot lmao.",
            "You *may* have the normal number of chromosommes, yet you're still more special than a downy with autism.",
            "Insert really racist things.", // Edit this one.
            "https://cdn.discordapp.com/attachments/503461822394007552/709550006448947230/Screenshot_20200510-2204573.png",
            "I love you.",
            "https://cdn.discordapp.com/attachments/503461822394007552/709550458997309480/Screenshot_20200511-154737_Instagram.jpg",
            "Climb back into the bucket of failed abortions you crawled out from",
            "https://cdn.discordapp.com/attachments/643844726419750925/726904841376366663/unknown.png",
            "Ok, give me a minute to think about what you just said.", // 31
            "You aren't even worth me coming up with something funny.",
            "ok yes haha i ping bot haha funi",
            "Ok, now let me ask you this. Why do you love cock?",
            "Ok jokes aside, I genuinely hope you lose a close family member in a building fire.",
            "https://cdn.discordapp.com/attachments/698225450232709180/726922286472495134/letterblocks.mp4",
            "https://cdn.discordapp.com/attachments/698225450232709180/726922812610052331/megagay.mp4",
            "https://cdn.discordapp.com/attachments/698225450232709180/726923101778214973/i.mp4",
            "https://cdn.discordapp.com/attachments/698225450232709180/726923441319706635/suck_my_dick.mp4",
            "https://cdn.discordapp.com/attachments/698225450232709180/726924969472163870/VHS_Logo_-_YOU_ARE_AMAZING.mp4",
            "https://cdn.discordapp.com/attachments/698225450232709180/726924991534465145/VHS_Logo_-_I_LOVE_YOU.mp4",
            "https://cdn.discordapp.com/attachments/698225450232709180/726925043837435984/VHS_Logo_-_YOURE_INVITED.mp4",
            "https://cdn.discordapp.com/attachments/698225450232709180/726925052997795848/VHS_Logo_-_Im_Begging_You.mp4",
            "Genuinely question why I have to interact with people like you.",
            "AHAHAHAHAHAHAAH You're funny. No really I'm fucking wheezing. Retard.",
            "https://cdn.discordapp.com/attachments/478358787783393280/731627077035491437/mega.mp4"
        ]
        let num = Math.floor(Math.random() * responseArray.length)
        if (num == 26){
            let editMsg = await message.channel.send(responseArray[num])
            editMsg.edit(`This message was too violent for Discord.`)
        }
        else if (num == 28){
            let editMsg = await message.channel.send(responseArray[num])
            let time = Date.now();
            let hahaOops = setInterval(async function () {
                if(time + 1000 < Date.now()){
                    editMsg.edit(`Haha, woops. That was meant for another person. Who are you again?`)
                    clearInterval(hahaOops)
                }
            }, 500)
        }
        else if (num == 31){
            let editMsg = await message.channel.send(responseArray[num])
            let time = Date.now();
            let noFucksGiven = setInterval(async function () {
                if(time + 1000 < Date.now()){
                    editMsg.edit(`Ok, after some thought, I've realized I give literal 0 fucks about you and what you have to say.`)
                    clearInterval(noFucksGiven)
                }
            }, 3000)
        }
        else return message.channel.send(responseArray[num])
    },
    CroolJoin: async function (member, serverSettings, Lyuca){
        let c = await serverSettings.findOne({where: {serverid: member.guild.id}})
        if(!c){
            return console.log(`h`)
        }
        let c1 = Math.floor(Math.random() * 256).toString(16);
        let c2 = Math.floor(Math.random() * 256).toString(16);
        let c3 = Math.floor(Math.random() * 256).toString(16);
        let joinEmbed = new Discord.MessageEmbed()
            .setAuthor(`${member.user.tag} Joined.`)
            .setDescription(`Welcome to the cesspool.`)
            .setImage(`https://cdn.discordapp.com/attachments/639706647434100739/710256649943646278/another_fag.gif`)
            .setColor(`#${c1}${c2}${c3}`)
        Lyuca.channels.cache.get(c.verificationchannel).send(joinEmbed)
    },
    LevelStuff: async function(message, uLevels, gLevels, sLevels){
        let levelTable = await uLevels.findOne({where: {gid: message.guild.id, uid: message.author.id}})
        let currentTime = Date.now();
        let xpSumResult, xpThresh;
        // user was not found
        if(!levelTable) {
            // create row for this server
            console.log('User was not found, creating profile now.');
            let createdTable = await uLevels.create({
                gid: message.guild.id,
                uid: message.author.id,
                level: 0,
                xpCurrent: 0,
                xpToNextLevel: 128,
                lastUpdateTime: currentTime,  
            });
            console.log('Created new row for table \'uLevels\' with the following settings:');
            console.log(createdTable.dataValues);
        }
        //user was found
        else{
            //update row for this server
            if(levelTable.lastUpdateTime + 30000 < currentTime){
                xpSumResult = levelTable.xpCurrent;
                xpSumResult += Math.floor(Math.random() * 10) + 5;
                xpThresh = levelTable.xpToNextLevel;
                if(xpSumResult > xpThresh){
                    //level up
                    xpThresh = Math.floor((xpThresh + 50) * 1.13);
                    let nLevel = levelTable.level;
                        nLevel += 1;
                        levelTable.update({xpCurrent: 0, level: nLevel, xpToNextLevel: xpThresh, lastUpdateTime: currentTime},{where:{gid: message.guild.id, uid: message.author.id}});
                }
                else{
                    //no level up
                    levelTable.update({xpCurrent: xpSumResult, lastUpdateTime: currentTime},{where:{gid: message.guild.id, uid: message.author.id}});
                }
            }
        }
        // move to global stuff here    
        let levelTable2 = await gLevels.findOne({where: {uid: message.author.id}});
        if(!levelTable2){
            // user was not found
            // create global profile of user
            levelTable2 = await gLevels.create({
                uid: message.author.id,
                level: 0,
                xpCurrent: 0,
                xpToNextLevel: 128,
                lastUpdateTime: currentTime,
            })
            console.log('No user was found. Created row under \'gLevels\' with the following settings.')
            console.log(levelTable2.dataValues);
        }
        else{
        // user was found update global profile
            if(levelTable2.lastUpdateTime + 30000 < currentTime){
                xpSumResult = levelTable2.xpCurrent;
                xpSumResult += Math.floor(Math.random() * 10) + 5;
                xpThresh = levelTable2.xpToNextLevel;
                if(xpSumResult > xpThresh){
                    xpThresh = Math.floor((xpThresh + 50) * 1.13);
                    let nLevel = levelTable2.level;
                        nLevel += 1;
                        levelTable2.update({xpCurrent: 0, level: nLevel, xpToNextLevel: xpThresh, lastUpdateTime: currentTime},{where:{uid: message.author.id}});
                    }
                else{
                    levelTable2.update({xpCurrent: xpSumResult, lastUpdateTime: currentTime},{where:{uid: message.author.id}});
                }
            }
        }
    },
    NwordCount: async function(message, DatabaseArr){
        let basedData = DatabaseArr[7];
        let countHardR = 0;
        let countSoftR = 0;
        let msgArr = message.content.toLocaleLowerCase().split(' ');
        console.log(msgArr)
        for(let i = 0; i < msgArr.length; i++){
            if(msgArr[i].match('nigga')){
                countSoftR++;
            }
            if(msgArr[i].match('nigger')){
                countHardR++;
            }
        }
        if(countHardR > 0 && message.guild.id == 456629687938973697){
            message.delete({timeout: 60000 * 60 * 3});
        }
        let basedPerson = await basedData.findOne({where: {uid: message.author.id}})
        if(!basedPerson){
            basedPerson = await basedData.create({
                uid: message.author.id,
                nwordTotal: countHardR + countSoftR,
                nwordSoftR: countSoftR,
                nwordHardR: countHardR,
            })
        }
        else if(basedPerson){
                let newCountHardR    = basedPerson.nwordHardR + countHardR;
                let newCountSoftR    = basedPerson.nwordSoftR + countSoftR;
                let total = newCountHardR + newCountSoftR;
                basedPerson.update({nwordHardR: newCountHardR, nwordSoftR: newCountSoftR, nwordTotal: total});
                return;
        }
    }
}