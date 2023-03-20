console.log("problems.js loaded")

let groceries = ["ham", "cheese", "potatoes"]
let groceryPrices = [6, 3, .99]
let salesTax = .8

//#1 print them out
//start at zero go until the end, add one to index
for(let index = 0; index < groceries.length; index++){
    console.log("index:", index, groceries[index])
}

//#2 print out total price
//go thorugh the prices and add them together
let totalPrice = 0
for(let index = 0; index < groceryPrices.length; index++){
    console.log("index:", index, groceryPrices[index])
    totalPrice = totalPrice + groceryPrices[index]
    console.log("Current total is", totalPrice)
}
//at the end expect total price to be 9.99

//#3 now add total price with sales tax included



//#4 find all the items that have the letter a in it
