module.exports = {
    name: `prune`,
    description: `-m Bulk deletes messages`,
    execute(Discord, message, Lyuca, sdPrefix)  {
        if (message.member.hasPermission(`MANAGE_MESSAGES`) || message.author.id == `252529231215460353`)
        {
            let amount = parseInt(message.content.split(` `).pop());
            message.channel.bulkDelete(amount)
            .then(() => {
                return message.channel.send(`${amount} message(s) were deleted`)
            })  
        }
    } 
}