/*
Lyuca Version 2.0.0

   What's new? 
	-Switched to v12 of the D.js library.
	-Added a few new functions and optimizations.
    -As always, added new bugs. 100% intentional.
    
Lyuca Version 2.0.1

   What's new? 
   -Tweaked a few automated responses.
   -Added music, very crude.
   -I think I fixed, and added a few commands
   -I dunno, some shit about bugs.

Lyuca Version 2.1.0
    What's new?
    -Added a kick command.
    -Added a proper help command.
    -Roulette 2.0, roles are now saved upon kicking.
    -Made the ban command a little better.
    -CBT.
    -Moment of silence is back, and meaner than ever.
    -Added a quoting thing(?)
    -Changed a few commands to accept IDs as well as pings.
    -Fixed some bugs.
    -Definitely added more than I fixed.

Lyuca Version 2.1.1
    What's new?
    -Added a few more ping responses, 8ball reponses, and trigger-reply responses.
    -Changed Avatar command from avatar -> av
    -Certain commands can now take text names.
    -Fixed the timestamp bug on the quote command.
    
Lyuca Version 2.1.2
    What's new?
    -Fixed the avatar command returning someone else's avatar.
    -Removed the ly.rc command and moved random to an option for ly.sc as well as a few predefined colours.
    -Fixed ly.serg so if the serg.al is down you still get a serg.
*/	
const Discord = require("discord.js");
const {token,testToken, sdPrefix, sPrefix} = require("./botconfig.json");
const readline = require('readline');
const fs = require("fs")
const functions = require("./functions")
const Lyuca = new Discord.Client({disableEveryone: true});
      Lyuca.commands = new Discord.Collection();
const commandDesc = []
const commandName = []
const commandFile = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFile) {
        const command = require(`./commands/${file}`);
        Lyuca.commands.set(command.name, command);
        commandDesc.push(command.description)
        commandName.push(command.name)
    };
const cmdArr = [commandName, commandDesc]
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
    host:'localhost',
    dialect:'sqlite',
    logging: false,
    storage: 'database.sqlite'
})
const serverSettings = sequelize.define('serverSettings', {
    serverid: Sequelize.STRING,
    verificationchannel: Sequelize.STRING,
    verificationrole: Sequelize.STRING,
    starboardchannel: Sequelize.STRING,
    starboardemote: Sequelize.STRING,
    imagelogchannel: Sequelize.STRING,
    duplicatelimit: Sequelize.STRING,
});
const lyucaSupportDb = sequelize.define('LyucaSupportDb', {
    uid:{
        type: Sequelize.STRING,
        unique: true,
    },
    uname: Sequelize.STRING,
    cid: Sequelize.STRING
});
const lyucaOverwatch = sequelize.define(`lyucaOverwatch`, {
    uid: Sequelize.STRING,
    sid: Sequelize.STRING,
    cid: Sequelize.STRING,
});
const roulette = sequelize.define(`roulette`, {
    uid: Sequelize.STRING,
    sid: Sequelize.STRING,
    rid: Sequelize.STRING(1024),
});
const uLevels = sequelize.define(`uLevels`, {
    gid: Sequelize.STRING,
    uid: Sequelize.STRING,
    level: Sequelize.INTEGER,
    xpCurrent: Sequelize.INTEGER,
    xpToNextLevel: Sequelize.INTEGER,
    lastUpdateTime: Sequelize.INTEGER,
});
const gLevels = sequelize.define(`gLevels`, {
    uid: Sequelize.STRING,
    level: Sequelize.INTEGER,
    xpCurrent: Sequelize.INTEGER,
    xpToNextLevel: Sequelize.INTEGER,
    lastUpdateTime: Sequelize.INTEGER,
});
const sLevels = sequelize.define(`sLevels`, {
    gid: Sequelize.STRING,
    stuff: Sequelize.TEXT,
});
const nwordCount = sequelize.define('nwordCount',{
    uid:            Sequelize.STRING,
    nwordTotal:     Sequelize.INTEGER,
    nwordHardR:     Sequelize.INTEGER,
    nwordSoftR:     Sequelize.INTEGER,
});
let DatabaseArr = [lyucaSupportDb, serverSettings, lyucaOverwatch, roulette, uLevels, gLevels, sLevels, nwordCount]

Lyuca.on("ready", async () => {
    let todayDate = new Date();
    serverSettings.sync();
    lyucaSupportDb.sync();
    lyucaOverwatch.sync();
    roulette.sync();
    uLevels.sync();
    gLevels.sync();
    sLevels.sync();
    nwordCount.sync();
    console.log(todayDate);
    console.log(`Lyuca is online. \nWhat would you like to do? <command stuff here>. Type 'exit' at any time to reset the target channel / user.`);
    Lyuca.user.setPresence({activity: {name: `you... wait no, I wasn't paying attention. What were you saying?`, type: 'LISTENING'}, status: "online"})
    const manualType = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    let consoleInterfaceSettings = {
        targetId: 0,
        targetType: 0,
    }
        manualType.on('line', async (line) => {
            functions.chatOverride(line, Lyuca, consoleInterfaceSettings, manualType);
            if(line.startsWith(`dm`)) {
                consoleInterfaceSettings.targetId = line.split(` `).pop()
                consoleInterfaceSettings.targetType = line.split(` `).shift()
            }
            else if(line.startsWith(`message`)) {
                consoleInterfaceSettings.targetId = line.split(` `).pop()
                consoleInterfaceSettings.targetType = line.split(` `).shift()
            }
      });
      /*function hSender(){
        let hChannel = Lyuca.channels.cache.map(g => g.id);
        let rng = Math.floor(Math.random() *  hChannel.length)
        Lyuca.channels.cache.find(c => c.id  == hChannel[rng]).send(`h`)
        setTimeout(hSender, Math.random() * 300000 + 30000)
      }
      hSender();*/
});

Lyuca.on("message", async message => {
    functions.LevelStuff(message, uLevels, gLevels, sLevels);
    let triggerWordArr = [
        `gay`,
        `nigga`,
        `maple`,
        'uwu',
        `funni`,
        'owo'
    ]
    let responseArr = [
        `Imagine, homosexuality lmao.`,
        `You can't say that, that's racist.`,
        `Why are we talking about DDTs child?`,
        'Shut the fuck up faggot.',
        `If you are reading this it's because people want you to do a funny. So give us a funny please.`,
        'https://imgur.com/3DdcHix',
    ]
    //if(message.author.bot) return
    const content = message.content.toLocaleLowerCase()
    const msgArr  = content.slice(sdPrefix.length).split(/ +/);
    const command = msgArr.shift();
    functions.MessageLog(Lyuca, message, lyucaOverwatch)
    if (message.attachments.size > 0){
        functions.trueEyes(Discord, message, Lyuca);
        functions.eyes(Discord, message, Lyuca, serverSettings);
    }
    if (message.channel.type == 'dm' && !message.author.bot){
        functions.lyucaSupportCreate(Discord, message, Lyuca, lyucaSupportDb);
    } 
    if (message.channel.type != `dm` && message.guild.name == `Lyuca Support` && message.content.startsWith(sPrefix)){
        functions.lyucaSupportReply(message, Lyuca, lyucaSupportDb, sPrefix);
    }
    for(let i = 0 ; i < triggerWordArr.length ; i++){
        if(message.content.match(triggerWordArr[i])){
            let chance = Math.floor(Math.random() * 128)
            if(chance == 0){return message.channel.send(responseArr[i]);
            }
        }
    }
    if(content.startsWith(`${sdPrefix}`))
    {
        if(!Lyuca.commands.has(command)) return;
        try{
            Lyuca.commands.get(command).execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr) 
        }catch(e){
            console.log(e);
            message.reply(`My code sucks so something went wrong.`)
        }
    }
    if (message.mentions.users.first() == Lyuca.user){
        functions.LyucaPing(message)
    }
    if(message.content.toLowerCase().match('nigga') || message.content.toLowerCase().match('nigger')){
        functions.NwordCount(message, DatabaseArr); //N-Word Counter.
    }
})
Lyuca.on("messageReactionAdd", async (reaction) => {
    functions.Emote(Discord, reaction, Lyuca, serverSettings)
});
Lyuca.on("guildMemberAdd", async (member) => {
    if (member.guild.id == `456629687938973697`) {
        functions.EmporiumJoin(member, Discord, serverSettings, Lyuca)
    }
    if (member.guild.id == `700087512026316811`) {
        functions.CroolJoin(member, serverSettings, Lyuca)
    }
    let failRoleArr = [];
    let savedRoles = await roulette.findOne({ where: {uid: member.id, sid: member.guild.id}})
    if(savedRoles){
        let roleArr = savedRoles.rid.split(`,`);
        let waste   = roleArr.pop();
        for(i = 0; i < roleArr.length; i++){
            let role = await member.guild.roles.cache.find(r => r.id == roleArr[i])
            if(role){
                member.roles.add(role).catch(e => console.log(e));
            }
            else{
                failRoleArr.push();
            }
        }
    }
    if(failRoleArr.length > 0){
        console.log(failRoleArr)
    }
});
Lyuca.on("guildMemberRemove", async (member) => {
    if(member.guild.id == `700087512026316811`){
        let h = await member.guild.channels.cache.find(c => c.id == `714929159612137483`);
        h.send(`${member.user.tag} has left. Won't be missed either.`);
    }
});
process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

Lyuca.login(token);
