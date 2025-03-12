// loops
// for loop
const week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// we want brush our teeth every day of the week 
let brush_note = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
};
// manually
// brush_note["monday"] = true;
// brush_note["tuesday"] = true;
// brush_note["wednesday"] = true;
// brush_note["thursday"] = true;
// brush_note["friday"] = true;
// brush_note["saturday"] = true;
// brush_note["sunday"] = true;

const highestIndexValuePossible = week.length - 1;

// dynamicaly
// for (let vannesaMustUnderstand = 0; vannesaMustUnderstand < week.length; vannesaMustUnderstand++) {
//     const day = week[vannesaMustUnderstand];
//     brush_note[day] = true;
// }

// for (let day in brush_note) {
//     brush_note[day] = true;
// }

// const referral_code = "yu56";
// const maxUser = 5;
// let usage = 0;
// let note = {
//     Vannessa: false,
//     Kele: false,
//     Ayo: false,
//     Chidi: false,
//     Tolu: false,
//     Kachi: false
// };
// const users = [
//     "Vannessa",
//     "Kele",
//     "Vannessa",
//     "Ayo",
//     "Chidi",
//     "Tolu",
//     "Kachi"
// ];
// let i = 0;

// while(i < users.length ) {
//     if(note[users[i]] === true) {
//         console.log(`${i}:${users[i]} already used the referral code`);
//         i = i + 1;
//         continue;
//     }
//     note[users[i]] = true;
//     usage = usage + 1;
//     if(usage === maxUser) {
//         console.log(note);
//         break;
//     }
//     i = i + 1;
// }


// function
function add(a, b) {
    return a + b;
}

const result = add(10, 20);
console.log(result);
