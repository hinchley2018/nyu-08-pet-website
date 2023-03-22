var searchTerm = "Cookie"

//how do i search through a list of pets

var pet1 ="Mabel"
var pet2 = "Terry"

//use let its better than var means about the same...
//square brackets are arrays
let pets = ["Mabel", "Terry", "Gumby", "Doggo", "Pizza", "Cookie"];


let petsAsObjects = [
]
console.log(pets)
for(let index = 0; index < pets.length; index++){
    //to search compare my search term against each pet in the list
    // when the pet name matches (name is equal to) then give me that pet
    if (pets[index] === searchTerm)
    {
        console.log(`Pet ${pets[index]} matches search term ${searchTerm}`)
    }
}


//i can grow that list with .push() a function on all arrays
pets.push("Rover")
console.log(pets)

//get the size / length of list with .length a member/property on all arrays
console.log("I have "+ pets.length + " pets available to adopt")


//#1 Get the rows of pets
let rows = document.querySelectorAll(".row")
console.log("rows", rows)
//#2 Get how many pets there are
//right now that's not possible
//intermediate step 2.1 change my html
let petElements = document.querySelectorAll(".pet")
console.log(petElements)
let numberOfPets = petElements.length;
console.log("number of pets", numberOfPets)

//#3 Get how many female pets there

//#4 color my header green
//select the header
let greenHeader = document.querySelector("h1")
console.log(greenHeader)
//change the font color to green
greenHeader.style.color = "green"