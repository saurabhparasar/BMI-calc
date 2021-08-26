const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBmi = markMass / (markHeight ** 2);
const johnBmi = johnMass / (johnHeight ** 2);

// console.log(markBmi);
// console.log(johnBmi);

const markHigherBMI = markBmi > johnBmi;
// console.log(markHigherBMI);


//coding challenge 2 

if (markBmi > johnBmi) {
    console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}!. `)
} else {
console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!.`)
 };


//  coding challenge 
