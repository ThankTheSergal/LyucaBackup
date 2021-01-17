module.exports = {
    name:`leave`,
    description: `-f Forces the bot to leave VC.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr){
        let vc = message.member.voice.channel;
        vc.leave();
    }
}