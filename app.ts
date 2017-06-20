
let message: string = "Help me, Obi-Wan Kenobi. You're my only hole! "
console.log(message);

let episode: number = 4
episode = "4"
console.log("This is episode" + 4)
episode = episode +1
console.log("Next episode is " + episode)


//Any
let favoriteDroid
favoriteDroid = 'BB-8'
console.log(favoriteDroid)

//functions
let isenoughToBeatMF = function (parsecs: number) : boolean{
	return parsecs < 12
}
let distance = 11
console.log(` Is ${distance} perscs enough to beat Millennium Falcon? ${isenoughToBeatMF(distance) ? 'YES' : 'NO'} `)

//FUNCITION 2
let call = (name: string) => console.log(`Do you copy, ${name}?	`)
call("R2")

//function 3
function inc (speed: number, inc: number = 1): number {
	return speed + inc 
}
console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5,1) = ${inc(5)}`)


//CLASSES E INTERFACES

class Space

