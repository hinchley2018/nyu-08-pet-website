console.log("about.js Script loaded")
let teamMembers = ["Ahmad", "Wendy", "Andre","Hans","Nathaniel"]

console.log(teamMembers)

//if i can print them i could somehow dispplay on the page
console.log(teamMembers[0])
console.log(teamMembers[1])
console.log(teamMembers[2])
console.log(teamMembers[3])
console.log(teamMembers[4])

//lets use a for loop to go through the array
for (let index = 0; index < teamMembers.length; index++) {
    let element = teamMembers[index];
    console.log("Team member:", element)
}