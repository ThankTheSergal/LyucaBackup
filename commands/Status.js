module.exports = {
    name: `status`,
    description: `Sets the status of Lyuca`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr) {
        if(message.author.id == `252529231215460353`){
            let type2 = msgArr.shift();
            let action = msgArr.shift().toUpperCase();
            let action2 = msgArr.join(" ");
            Lyuca.user.setPresence({activity: {name: action2, type: action}, status: type2})
        }
    }
}