//Create a string var

/*var petName = prompt("What's my pets name?", "Type name here.");

switch (petName) {
    case "Rover":
        alert("My dogs name is " + petName); 
        break;
   
   case "Sally":
        alert("My friends dog is named " + petName); 
        break;
        
    case "Fluffy":
        alert("A dog named " + petName + " bit me once."); 
        break;
        
    default:
    alert("That is not my pets name.");
        break;
}*/

var gameLevel =  1;
var password = "Mellon";

var userName = prompt("Enter your name.");
var passwordCheck;

function checkPassword() {
    switch (gameLevel) {
        case 1:
            passwordCheck = prompt(userName + " speak friend and enter.");
            if (password = passwordCheck) {
                gameLevel = 2;
            }
            checkPassword();
            break;

        case 2:
            alert(gameLevel);
            break;

        case 3:

            break;
    }
}

checkPassword ();