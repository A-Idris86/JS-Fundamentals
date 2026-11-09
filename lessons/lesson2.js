//Concatination and Interpolation
// In der Programmierung bedeutet Concatenation, dass man mehrere Zeichenketten (Strings) miteinander verbindet.
//Ein Template String (offiziell Template Literal) ist in JavaScript/TypeScript ein String, der mit Backticks ` statt mit einfachen oder doppelten Anführungszeichen geschrieben wird. Er hat zwei große Vorteile: Du kannst Variablen und Ausdrücke direkt einbetten, und er darf über mehrere Zeilen gehen.
//Variablen einbetten mit ${...}

var price = 50
var itemName = "Cup"
var messageToPrint = "The price for your "+itemName+" is "+price+" dollars" //Concatenation
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars` //Interpolation
console.log(messageToPrint)