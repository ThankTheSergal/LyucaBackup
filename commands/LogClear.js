module.exports = {
    name: `clearlogs`,
    description: `-m Clears all the currently active logs.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr){
        async function blah(){
            let lyucaOverwatch = DatabaseArr[2];s
            let h = await lyucaOverwatch.findAll({attributes: ['cid']});
            for(let i = 0 ; i < h.length; i++){
            Lyuca.channels.find(c => c.id == h[i].cid).delete();
            lyucaOverwatch.destroy({where: {cid: h[i].cid}});              
            };
            message.channel.send(`Logs have been cleared.`);      
        }
    blah()
    }
}