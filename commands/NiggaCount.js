module.exports = {
    name:'nword',
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr){
        async function blah(){
            let nwordcount = DatabaseArr[7];
            let based = await nwordcount.findOne({where: {uid: message.author.id}})
            if(based){
                let hardR = based.nwordHardR;
                let nwordTotal = based.nwordTotal;
                message.channel.send(`You have said the nword ${nwordTotal} times. (${hardR} times with the hard R)`)
            }
            else{
                return message.channel.send("You are not based and haven't said the nword yet.")
            }
        }
        blah();
    }
}