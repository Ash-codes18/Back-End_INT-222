let event = require('events');
let a = new event();
let inp = require('prompt-sync')();

a.on("percentage", function (p, q, r, s, t) {
    let percentage = ((p + q + r + s + t) / (5 * 100)) * 100;
    console.log(`The student obtained : ${percentage}% marks overall.`);
})

console.log("Enter the marks : ");
let phy = Number(inp("Physics : "));
let mth = Number(inp("Maths : "));
let chem = Number(inp("Chemistry : "));
let eng = Number(inp("English : "));
let cs = Number(inp("Computer Science : "));

a.emit("percentage", phy, mth, chem, eng, cs);
