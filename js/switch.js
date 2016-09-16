//Create a string var


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