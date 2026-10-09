const boxContainer = document.querySelector("#box");
const hours = new Date().getHours();
let greeting;

if (hours < 12) {
    greeting = "Good Morning!! Medhansh,Have a nice day.";
} else if (hours < 16) {
    greeting = "Hey Medhansh,Good Afternoon!!";
} else if (hours < 20) {
    greeting = "Good Evening,Medhansh.";
} else {
    greeting = "Good Night!Medhansh.";
}

if (boxContainer) {
    const newHeading = document.createElement("h2");
    newHeading.textContent = greeting;
    boxContainer.appendChild(newHeading);
}


const yearSpan = document.querySelector("#year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

//Set up a watchman.

document.querySelector("h1").addEventListener(`click`, function(){
 console.log("Somebody poked on your heading")
});

const heading= document.querySelector(`h1`);
 
heading.addEventListener(`click`, function(event){
    console.log(`You clicked:`, event.target.textContent);
    heading.classList.toggle(`clicked-logo`);
});
