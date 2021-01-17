module.exports = {
    name: `play`,
    description: `-f Plays a song from YouTube.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr) {
        let ytdl = require('ytdl-core')
        let musicArgs = message.content.slice(sdPrefix.length).split(/ +/);
        let ytURL = musicArgs[1];
        if(!ytURL || (!ytURL.startsWith(`https://www.youtube.com/`) && !ytURL.startsWith(`https://youtube.com/`) && !ytURL.startsWith(`https://youtu.be/`))){
            return message.channel.send(`My code is shit, only works with youtube right now. Please provide a valid YT link.`)
        }
        let vc = message.member.voice.channel || message.mentions.members.first().voice.channel;
        if(vc){
            vc.join().then(connection => {
                const stream = ytdl(ytURL, { filter: 'audioonly'});
                const music = connection.play(stream);
                music.on('end', () => {
                    console.log(`end`)
                    voiceChannel.leave();
                })
            })
        }
        else{
            return message.channel.send(`Cannot find your voice channel. Please make sure you are actually in one fucktard.`);
        }
    }
}