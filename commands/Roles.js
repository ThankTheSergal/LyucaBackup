module.exports = {
    name: 'sr',
    description: `Gives me my roles back`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr) {
        if((message.author.id == `252529231215460353` || message.author.id == `255556243333054464`) && message.guild.id == `638456739506814976`)
        {
            let h = message.guild.roles.cache.find(role => role.name == `h`)
            if (!h) {
                return message.reply(`Couldn't find your roles. Hellmo sucks`)
            }
            message.member.roles.add(h)
            h = message.guild.roles.cache.find(role => role.name == `Käse`)
            if (!h) {
                return message.reply(`Couldn't find your roles. Hellmo sucks`)
            }
            message.member.roles.add(h)
            h = message.guild.roles.cache.find(role => role.id == `686000997407260723`)
            if (!h) {
                return message.reply(`Couldn't find your roles. Hellmo sucks`)
            }
            message.member.roles.add(h)
        }
        //Emporium.
        else if((message.author.id == `252529231215460353` || message.author.id == `255556243333054464`)&& message.guild.id == `456629687938973697`){
            let roleIdArr = [`688821427834454150`, `503639565404471317`, `459965301820227584`, `632345609386328105`, `689462736463200364`, `556672370010488843`, `503468266988240906`, `456643542807478273`, `503468491903336458`, `503467915945836555`, `539982779346059265`, `541784652411830313`, `556669622338977792`, `627667862663987231`] 
            for(let i = 0 ; i < roleIdArr.length ; i++) {
                let h = message.guild.roles.cache.find(role => role.id == roleIdArr[i])
                if (!h) {
                    return console.log(`Could not find role with the ID ${roleIdArr[i]}`)
                }
                else{
                    let me = message.guild.members.cache.find(m => m.id == `252529231215460353`)
                    me.roles.add(h)
                }
            }
        }
        //Silver's server.
        else if((message.author.id == `252529231215460353` || message.author.id == `255556243333054464`)&& message.guild.id == `643844726419750922`){
            let roleIdArr = ['664686561983725568', '664679854243053569','664680754856460289', '664685606147719169','664914823615873025', '683562865969463296','664680660874690570', '664679234727575563','664681689498386444', '667121785124421643','664679689431941134', '664681121434435598','667429582671970324', '664680372340260885','664684104733687830', '670659857979932694','665358288895868957', '685949614385397920','682410566442156072', '699733579235721258','679434526677794866', '672170283532288060','686067180324126807', '704263805865295962','702974270883627109'];   
            for(let i = 0 ; i < roleIdArr.length ; i++){
                let h = message.guild.roles.cache.find(role => role.id == roleIdArr[i]) 
                if (!h) {
                    return console.log(`Could not find role with the ID ${roleIdArr[i]}`)
                }
                else{
                    let me = message.guild.members.cache.find(m => m.id == `252529231215460353`)
                    me.roles.add(h)
                }
            }
        }
    }
}