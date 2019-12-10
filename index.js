// Code your solutions in this file
<<<<<<< HEAD
let newArray = [];
function writeCards(names, events) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
  }

return newArray;
}

let newNumbers = [];
function countDown(number){
while (number >= 0) {
  console.log(number--);
}
=======

let names = ["Ada", "Brendan", "Ali"];
let events = ["birthday"];

function writeCards(name, events) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful ${events} gift!`);
}
return writeCards(name, events);
>>>>>>> 62cacbfe27cd3cb27aa7055123971b8fcff17aca
}
