module.exports = {
    name:`kill`,
    description:`-u Kills someone.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr){
        async function Blah() {
            let ex = require('./ExternFuncs')
            let h = await message.member.roles.cache.find(u => u.name == `New Cummer`)
            if(h){
                message.author.send(`You shot yourself.`)
                message.member.kick()
                return message.channel.send(`*${message.author.username} turns the gun around and shoots themself.*`)
            }
            else{
                let pingedUser = ex.FindMember(message, msgArr);
                if(!pingedUser) return message.channel.send(`You must ping a user to kill.`)
                message.channel.send(`*${message.author.username} shoots and kills ${pingedUser.user.username}*`)
            }
        }
        Blah();
    }
}