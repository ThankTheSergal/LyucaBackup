module.exports = {
    name: `draw`,
    description: `-u Draws a card from an uno deck.`,
    execute(Discord, message, Lyuca, sdPrefix, fs, DatabaseArr, msgArr) { 
        let numberToGive = msgArr[0]
        let colourArr = [
            'Red ',
            'Blue ',
            'Green ',
            'Yellow ',
        ]
        let cardNumber = 
        ['1','2','3','4','5','6','7','8','9','Reverse', 'Skip-a-turn', 'Colour Change', 'Pickup 2', 'Pickup 4', 'Pickup 10, fuck you.',
         '1','2','3','4','5','6','7','8','9','Reverse', 'Skip-a-turn', 'Colour Change', 'Pickup 2', 'Pickup 4',
         '1','2','3','4','5','6','7','8','9','Reverse', 'Skip-a-turn', 'Colour Change', 'Pickup 2', 'Pickup 4',
         '1','2','3','4','5','6','7','8','9','Reverse', 'Skip-a-turn', 'Colour Change', 'Pickup 2', 'Pickup 4',
        ]
        let colourNum;
        let chosenColour;
        let numberNum;
        let chosenNumber;
        let CardArr = [];
        let card;
        if (!numberToGive) {
            numberToGive = 1;
        }
        for(i = 0 ; i < numberToGive ; i++)
        {
            colourNum = Math.floor(Math.random() * 4);
            chosenColour = colourArr[colourNum];
            numberNum = Math.floor(Math.random() * 57);
            chosenNumber = cardNumber[numberNum];
            if(chosenNumber == 'Colour Change' || chosenNumber == 'Pickup 2' || chosenNumber == 'Pickup 4' || chosenNumber == 'Pickup 10, fuck you.') {
                chosenColour = ``;
            }
            card = `${chosenColour}${chosenNumber}\n`;      
            CardArr.push(card)
        }
        let finalHand = `${CardArr}`
        finalHand = finalHand.replace(/\,/g,``)
        message.author.send(`You picked up the following card(s): \n${finalHand}`)
    }
}