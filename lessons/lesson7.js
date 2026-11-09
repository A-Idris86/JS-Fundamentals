// Loops

// console.log('Hello Word!')
// console.log('Hello Word!')
// console.log('Hello Word!')
// console.log('Hello Word!')
// console.log('Hello Word!')

// for (statement1; statement2; statement3){}
//Die for...of-Schleife durchläuft nacheinander die Werte einer iterierbaren Sammlung, 
// also z. B. eines Arrays, eines Strings, einer Map oder eines Sets. 
// Du musst dich dabei nicht um Indizes oder Längen kümmern.
// for loop (for i loop)
for (i=0; i<5; i++){
    console.log('Hello Word!' +i)
}
var cars = ["Volvo", "toyota", "Tesla"]
// for of loop
for(let c of cars){
    console.log(c)
    if (c == "toyota"){
        break
    }
}
 //ES6 syntax for each loop
 cars.forEach(c => {
    console.log(c)
 })