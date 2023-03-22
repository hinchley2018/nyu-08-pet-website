console.log("script loaded")

//document is global object rep the entire webpage
//this is only available in a browser
//traverse looking at their children as an array
let myElement = document.body.children[0]
console.log(myElement)
//better option of getting a tag
let myImageByQuery = document.querySelector("img")
console.log(myImageByQuery)