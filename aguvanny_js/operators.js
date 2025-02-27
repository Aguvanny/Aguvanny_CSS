// if statements
const x = 10;
const y = 20;
const z = 30;
if(x > y) {
    console.log("x is greater than y");
} else if(y > z) {
    console.log("y is greater than x");
} else {
    console.log("z is king");
}
const vannessaGender = "Female";
if(vannessaGender === "Female") {
    console.log("Vannessa is a girl");
} else {
    console.log("Vannessa is a boy");
}

if(vannessaGender === "Female") {
    console.log("Vannessa is a girl, just if");
}

let vannessaHouse = {
    address: "14a oba elegushi rd, ikoyi",
    type: "bungalow",
    rooms: 3,
    sittingRom: 1,
    kitchen: 1
};
vannessaHouse = null;
if((vannessaHouse.rooms !== 3)) {
    console.log("Yes o, she does");
} else {
    console.log("she is either too poor or too young to own a house");
}

// switch statements
const vannessaGoodBag = 0;
switch (vannessaGoodBag) {
    case 1:
        console.log("She is probably nerd");
        break;
    case 2:
        console.log("She is still probably nerd");
        break;
    case 3:
        console.log("She don dy hot");
        break;
    case 4:
        console.log("She has arrived finally");
        break;
    case 5:
        console.log("She is vannessa");
        break;

    default:
        console.log("We dont know who the fuck she is");
        break;
}
