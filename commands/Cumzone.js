const { Message } = require("discord.js")

module.exports  = {
    name: `cumzone`,
    description: `Welcome to the cumzone.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr, cmdArr){
        let cumzone = `
        Only Cum Inside Anime Girls,
        Quivering Clit,
        Double Jointed Pussy,
        Fresh Balls,
        Elegant Ejaculation,
        First the Kiss, Then the Cum,
        My Dick in Love With Pain,
        Co-op Cock Torture,
        Stuff my Dick Into a Furnace,
        Stitch my Cock Shut,
        Pressure Cook my Greasy Balls,
        Cum Blast me, and Make it Snappy
        
        Cum, Cum, Cum, Cum x 8
        
        What's All the Cummotion,
        My Dad Fell Into a Cumshaft,
        My Dad Glazed my Face With Cum,
        Fertilize a Baby With Hunk Spunk,
        Cum Spunk in my Trunk,
        Cum Craving Toddler,
        Cum Dripping Cunt,
        Cummy Rae Jespen,
        Cum me Maybe,
        Cummy Bottom Boy
        Night of the Living Cum,
        Nefarious Cum Mastermind,
        Cum Makes me Fearless,
        Cum Crammer,
        Cock Slammer,
        Cum slammed ya mum,
        Mail ya Mums Pieces of my Dick,
        Bazinga,
        Chug the Cum,
        Fug ya Mum,
        Fuck my Asshole Full of Cum,
        Three Little Words...Get fucked nerd
        
        Cum stuffer,
        Jenkem Huffer,
        Fuck my Cum Puddle,
        Bottom Stuffer,
        Semen Huffer,
        Would Love a Gator to Fuck Me,
        Undercooked Daby Pig Penises,
        Help my Dogs Get a Huge Boner,
        Waterbong Full of Cat Cum,
        Accidentally Fucked my Own Ass,
        I barely had any dicks inside me,
        Who Ate All my Cum? A Mystery,
        Cum Detective Hot on the Trail,
        Bees Make Honey, I Make Cummy`
        let cumEmbed = new Discord.MessageEmbed()
            .setAuthor(`Welcome to the cumzone!`)
            .setDescription(cumzone)
            .setColor(`#FF9CFA`)
        message.channel.send(cumEmbed);
    }
}