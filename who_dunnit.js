// Episode 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};

const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
    console.log(verdict);

// This one is straightforward. The object scenario is global here and hasn't been modified.
// As such, the murderer remains Miss Scarlett

// Episode 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
    murderer = 'Mrs. Peacock'; // Cannot be re-assigned
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// The murderer cannot be re-assigned within the changeMurderer function as the variable was created using const

// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
    let murderer = 'Mrs. Peacock'; // only changes murderer within this function
    return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// firstVerdict calls the declareMurderer function where the murderer has changed to Mrs. Peacock
// secondVerdict calls the murderer variable directly, which is unaffected by the declareMurderer function

// Episode 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
    let suspectThree = 'Colonel Mustard'; // only changes suspectThree if this function is called
    return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// The first console.log calls the declareAllSuspects function (via the const suspects)
// As such, it will list the suspects as Miss Scarlet, Professor Plum and Colonel Mustard.
// The second console.log will return Mrs. Peacock instead of Colonel Mustard.
// This is because the declareAllSuspects function has not been called.

// Episode 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
}

const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver'); 
const verdict = declareWeapon();
console.log(verdict);

// Calling changeWeapon will change the weapon to Revolver. This will be displayed via console.log.
// This is permitted as only the data is changing and no re-assignment is taking place.

// Episode 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    murderer = 'Mrs. White';
    } // end of plotTwist

plotTwist();
} // End of changeMurderer

const declareMurderer = function () {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Calling changeMurdered will change the murderer to Mr Green and then to Mrs White
// The change is not limited to the functin as the murderer variable was declared globally 

// Episode 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
murderer = 'Mr. Green';

const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
    murderer = 'Miss Scarlet';
    } // end of unexpectedOutcome

    unexpectedOutcome();
} // end of plotTwist

plotTwist(); // end of changeMurderer
}

const declareMurderer = function() {
return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
// The variable declareMurderer is assigned before the changeMurder function is actually called
// As such, the murderer would still be Mr Green

// Episode 8
const scenario = {
murderer: 'Mrs. Peacock',
room: 'Conservatory',
weapon: 'Lead Pipe'
};

const changeScenario = function() {
scenario.murderer = 'Mrs. Peacock';
scenario.room = 'Dining Room';

const plotTwist = function(room) { // 'Dining Room' is passed into this function later
    if (scenario.room === room) { // That means this if statement is true
    scenario.murderer = 'Colonel Mustard'; // murdered changed to Colonel Mustard
    } // end of if statement

    const unexpectedOutcome = function(murderer) { // 'Colonel Mustard is passed into this function afterwards
    if (scenario.murderer === murderer) { // Therefore, this will be true
        scenario.weapon = 'Candle Stick'; // Weapon will change to Candle Stick
    } // end of if statement
    } // end of unexpectedOutcome

    unexpectedOutcome('Colonel Mustard');
} // end of plotTwist

plotTwist('Dining Room');
} // end of changeScenario

const declareWeapon = function() {
return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// As the if statements within the plotTwist and unexpectedOutcome functions are true
// The murder weapon will be changed to Candle Stick

// Episode 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock'; // only changes murderer variable within if statement
}

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// As the murderer is re-assigned using let, it will not change the murdered outwith the if statement
// Therefore, the murderer remains Professor Plum

