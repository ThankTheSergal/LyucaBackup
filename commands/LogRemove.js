module.exports = {
    name: `unlog`,
    description: `-m Deletes the log of the pinged user.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr){
        async function blah() {
            let lyucaOverwatch = DatabaseArr[2];
            if(message.mentions.users.first() || msgArr[0].length < 16){
                let u = message.mentions.users.first().id || msgArr[0].length;
                let h = await lyucaOverwatch.findOne({where: {uid: u}})
                if (!h){
                    return message.channel.send(`User either isn't logged, or my code sucks. The latter is more likely.`)
                }
                Lyuca.channels.cache.get(h.cid).delete()
                .then( async () => {
                    let t = await lyucaOverwatch.destroy({where: {uid: u}})
                    if(!t){
                        return message.channel.send(`Error because I hate you.`)
                    }
                    return message.channel.send(`User successfully unlogged.`) //This needs fixing.
                })
            }
            else{
                return message.channel.send(`You must provide the ID of, or ping a user.`)
            }
        }
        blah()
    }
}