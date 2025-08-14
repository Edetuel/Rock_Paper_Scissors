# Rock_Paper_Scissors
First go on JS. A simple game of choice.


For keep seek.

// let age = prompt("Age please: ");

        // let message = (age < 18) ? "You are underaged and cannot proceed" :
        //     (age <= 25) ? "You are in you prime. Learn more and stress less!" :
        //     (age <= 50) ? "You need to be making better decisions else you might regret things later" :
        //     (age > 50) ? "You are about to retire, put yourself in order real quick." : "You didn't put an actual age";
            
        // alert(message);

    function checkAge(age) {
        if (age >= 18) {
            return true;
        } else {
            return confirm ('Do you have permission from your parents!');
        }
    }

    let age = prompt("How old are you?", 18);

    if (checkAge(age)) {
        alert("Access granted!");
    } else {
        alert("Access denied");
    }


    function add7(number) {
            return number + 7;
        }

        let multiply = function(a, b) {
            return  a * b;
        }
        
    function capitalize(str) {
        let text = prompt("input a  text: ");
        let text1 = text.charAt(0).toUpperCase() + text.slice(1);

        return text1;
        }

        let lastLetter = function(text) {
            let last = prompt("Input a word: ");
            let last1 = last.slice(-1);

            return last1;
        }