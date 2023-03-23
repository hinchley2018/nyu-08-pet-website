console.log("script loaded")

//document is global object rep the entire webpage
//this is only available in a browser
//traverse looking at their children as an array
let myElement = document.body.children[0]
console.log(myElement)
//better option of getting a tag
let myImageByQuery = document.querySelector("img")
console.log(myImageByQuery)

//#3 organize all that in a div
//#0 get reference to my pets container div
let petsContainer = document.querySelector("#pets")
console.log("pets container", petsContainer)
//#1 add my pets name to the screen using an h1
let myPetName = document.createElement("h1")
console.log(myPetName)

//while building the dog house put rover's name on it
myPetName.textContent = "Rover's dog house"

//put the dog house on the lawn at the bottom
petsContainer.append(myPetName)

//#2 add my pets image to the screen using img
//built the structure
let birdFeederImg = document.createElement("img")
//this won't work for an image
birdFeederImg.textContent = "Hello world"
//paint the walls, set the kind of paint, 
birdFeederImg.setAttribute("src","http://placekitten.com/200/200")
//install it to the bottom
petsContainer.append(birdFeederImg)


//#5 allow people to adopt a pet
//select cookie group
let cookieDiv = document.querySelector("#cookie")
console.log(cookieDiv)
//remove from screen
cookieDiv.remove()

//#6 make adopt me button for rover
//build a button
let adoptRover = document.createElement("button")
//add some text to it
adoptRover.textContent = "Adopt me"
//add to screen
petsContainer.append(adoptRover)

function adoptThisPet(){

}
function addToCart(){

}

function removeFromCart(){
    
}