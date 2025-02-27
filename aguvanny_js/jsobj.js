// Javascript objects
let vannessaObj = {
    firstname: "Vannessa",
    lastname: "Agu",
    age: 22,
    hobbies: ["coding", "reading", "watching movies"],
    single: false,
    speak: function(w) {
        console.log(w);
    }
};
vannessaObj.firstname = "Eric";
// vannessaObj.speak = "liar liar pants on fire";
vannessaObj.yawns = true;
vannessaObj["isTall"] = true;

console.log(typeof vannessaObj.speak)
// vannessaObj.speak("I ma right, right?");
