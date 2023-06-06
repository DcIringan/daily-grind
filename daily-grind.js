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

let coffee = "";

function coffeeTemplate(coffee){

    return`
  
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
    <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
    
   `; 
  
  }



//today = 3;

switch(today){

  case 1:
    today = "Monday";

    coffee = {
        name: "Bubble Tea",
        pic: "images/bubble-tea.jpg",
        alt: "a picture of a bubble tea",
        color: "pink",
        day: "Monday",
        desc: `I love me some bubble tea!`
    };
    
    break;
    
    case 2:
         today = "Taco Tuesdays";
    break;

    case 3:
        today = "Taco Wednesday";
   break;

   default:
      today = "Day is unknown";
}

document.getElementById("coffee-cup").innerHTML  = coffeeTemplate(coffee);

console.log(coffee);