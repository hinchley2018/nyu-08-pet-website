let mabel = {
    type: "dog",
    breed: "Shiba Inu",
    gender: "Female",
    rabbiesVaccine: true,
    yearsOld: 8,
    price: 300
}
let terry = {
    type: "dog",
    breed: "Terrier",
    gender: "Male",
    rabbiesVaccine: true,
    yearsOld: 12,
    price: 1200
}
let gumby = {
    type: "cat",
    breed: "Calico",
    gender: "Female",
    rabbiesVaccine: false,
    yearsOld: 4,
    price: 4000
}

//what would car look like
let car488 = {
    make: "Ferrari",
    model: "488",
    horsePower: 745,
    msrp: 400000
}

let house = {
    roofType: "shingle",
    address: "1234 Seasme Street",
    msrp: 500000
}

console.log(mabel)
console.log(terry)
console.log(gumby)

console.log(car488)
console.log(house)

//#5 go on a shopping spree
console.log(mabel.price + terry.price + gumby.price + car488.msrp + house.msrp)


let groceries = ["ham", "cheese", "potatoes"]
let groceryPrices = [6, 3, .99]
let groceriesAsObjs = [
    //ask for more space for this kind of object
    {
        name: "ham",
        price: 6
    },
    {
        name: "cheese",
        price: 3
    },
    {
        name: "potatoes",
        price: .99
    }
]