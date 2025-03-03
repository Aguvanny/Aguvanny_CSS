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
brush_note["monday"] = true;
brush_note["tuesday"] = true;
brush_note["wednesday"] = true;
brush_note["thursday"] = true;
brush_note["friday"] = true;
brush_note["saturday"] = true;
brush_note["sunday"] = true;

const highestIndexValuePossible = week.length - 1;

// dynamicaly
for (let vannesaMustUnderstand = 0; vannesaMustUnderstand < week.length; vannesaMustUnderstand++) {
    const day = week[vannesaMustUnderstand];
    brush_note[day] = true;
}
