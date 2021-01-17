module.exports = {
    name: 'nboard',
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr) {
        async function blah(){
            const ex = require('./ExternFuncs');
            let basedData = DatabaseArr[7];
            let topBasedPeople = await basedData.findAll({
                limit: 10,
                order: [['nwordTotal', 'DESC']],
            });
            if(topBasedPeople){
                let topCount = topBasedPeople.map(n => n.dataValues);
                let msgFormatArr = [];
                for(i = 0; i < topCount.length; i++){
                    let basedUser = Lyuca.users.cache.find(u => u.id == topCount[i].uid)
                    console.log(basedUser);
                    let posLine = `${i + 1}) ${basedUser.username}, said the nword ${topCount[i].nwordTotal} times. (${topCount[i].nwordHardR} times with the hard R)\n`
                    msgFormatArr.push(posLine);
                }
                let msg = msgFormatArr.join().replace(/,/g ,'');
                message.channel.send(msg);
            }
        }
        blah();
    }
}