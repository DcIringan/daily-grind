/*

    name - name of the coffee
    pic - the picture of the coffee
    color - color associated to the coffee
    alt - the alt tag identifying the coffee
    day - the day of the week
    desc - description of the coffee






*/
let myDate = new Date();

let today = myDate.getDay();

//today = 3;

switch(today){

    case 2:
         today = "Taco Tuesdays";
    break;

    case 3:
        today = "Taco Wednesday";
   break;

   default:
      today = "Day is unknown";
}
let coffee = {
    name: "Bubble Tea",
    pic: "images/bubble-tea.jpg",
    alt: "a picture of a bubble tea",
    color: "pink",
    day: "Wednesday",
    desc: `I love me some bubble tea!`
}

console.log(coffee);