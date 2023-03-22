//get ingredients
// go to kitchen
// open fridge
// get two slices of bread from pantry
// get pb and jelly from fridge

//make a P&B&J sandwhich
/*
speread pb and jelly on bread
close bread
cut sandwhich in two
*/

//prints data to the console
console.log()

let pets = ["cookie", 'terry', 'gumby']

//what does this function do?
//adds to array
pets.push("monkey")

//what does this do?
//message
// window.prompt("You won a prize, click this link it is definitely not a virus")

//define a function for sandwhich making
function makeMeASandwich(typeOfPB, typeOfJelly, typeOfBread, shouldCutInHalf){
    console.log(`speread ${typeOfPB} and ${typeOfJelly} on ${typeOfBread}`)
    console.log("close bread")
    if (shouldCutInHalf){
        console.log("cut sandwhich in two")
    }
    
}

//making a sandwich
makeMeASandwich("Organic PB", "Peach Jelly", "Whole Grain Bread")

let students = [
    {
        name: "ahmad",
        pb: "Crunchy",
        jelly: "grape",
        bread: 'wheat'
    },
    {
        name: "andre",
        pb: "organic pb with honey",
        jelly: "strawberry",
        bread: 'butter bread'
    }
]
//make everyone a sandwhich
for (let index = 0; index < students.length; index++) {
    //why is this getting undefined
    let s = students[index]
    makeMeASandwich(s.pb, s.jelly, s.bread)

}

// getIngredients()
let products = ["dog leash", "hair dryer", "lotr book", "computer"]
function getProduct(searchTerm){
    for (let index = 0; index < products.length; index++) {
        // if matches return that product
        if (products[index].toLowerCase() === searchTerm.toLowerCase()){
            return products[index]
        }
        
    }
}
// not in list
console.log(getProduct("star wars")) //expected beahori - undefind 
console.log(getProduct("lotr book")) // lotr book
console.log(getProduct("Dog Leash")) //???undeinfed wrong case