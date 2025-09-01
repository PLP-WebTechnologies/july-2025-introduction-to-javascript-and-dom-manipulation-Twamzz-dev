// Variable decalaration and initialization
let ritwa = "Gatimu"
console.log(ritwa);

//conditional variable
age = 23;
let chop = age >= 18 ? "You are an adult" : "You are a minor";
console.log(chop);

//custom functions
function greet(name){
    return "Hello " + name;
}
console.log(greet("Gatimu"));

let difference = (a, b) => {return a- b};
console.log(difference(10, 5));

//loop examples
for(let i = 10; i <= 15; i++){
    console.log(i);
}

let n = 32;
while(n <= 35){
    console.log(n);
    n++;
}

//DOM interactions
let changes = function(){
    //select the elements
    let body = document.getElementById("body");
    let heading1 = document.getElementById("heading1");
    let paragraph = document.getElementById("paragraph");

    //manipulate the elements
    body.style.backgroundColor = "lightblue";
    body.style.margin = "15px";
    heading1.textContent = "Abracadabra";
    heading1.style.color = "darkblue";
    paragraph.style.fontSize = "20px";
    paragraph.textContent = "Kinda like magic right?";

    //add
    let newtext = document.createElement("p");
    newtext.textContent = "This is a new paragraph added by JavaScript";
    newtext.style.fontSize = "20px";
    body.appendChild(newtext);
}