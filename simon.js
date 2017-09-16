var colors = ["red", "blue", "yellow", "green"];
var randomIndex = Math.floor(Math.random() * 4);
var computerArr = [];
var computerArrForGame = [];
var playerArr = [];

window.onload = setComputerArr;


function setComputerArr() {

    for (var i = 0; i < 30; i++) {
        randomIndex = Math.floor(Math.random() * 4);
        computerArr.push(colors[randomIndex]);
    }
}

console.log(computerArr);


function startGame() {

    setTimeout(computerLightUp(), 1000);

};




var index = 0;
var id;

function computerLightUp() {
    
    
    if (("dark" + computerArr[index]) == "darkred") {
        id = "0";
    } else if (("dark" + computerArr[index]) == "darkblue") {
        id = "1";
    } else if (("dark" + computerArr[index]) == "darkyellow") {
        id = "2";
    } else if (("dark" + computerArr[index]) == "darkgreen") {
        id = "3";
    }
    
    var computerColorClass = computerArr[index];// i.e. "red", "blue", "yellow", "green"
    computerArrForGame.push(computerColorClass)// add the color to the computer array for the game
 
        var colorSquare = document.getElementById(id);
        colorSquare.removeAttribute("class");
        colorSquare.setAttribute("class", computerArr[index]);// set to "light" on
        function lightOff() {
            colorSquare = document.getElementById(id);
            colorSquare.setAttribute("class", "dark" + computerColorClass);// set to "light" off
            console.log("ComputerArrForGame", computerArrForGame);
            // index++;
            // if (index<1){
            // computerLightUp();
            // }
        }

        setTimeout(lightOff, 1000);
 

}

// function playerLightUp() {



//         if (("dark" + computerArr[index]) == "darkred") {
//             id = "0";
//         } else if (("dark" + computerArr[index]) == "darkblue") {
//             id = "1";
//         } else if (("dark" + computerArr[index]) == "darkyellow") {
//             id = "2";
//         } else if (("dark" + computerArr[index]) == "darkgreen") {
//             id = "3";
//         }

//         var colorSquare = document.getElementById(id);
//         colorSquare.removeAttribute("class");
//         colorSquare.setAttribute("class", computerArr[index]);
//         var computerColorClass = computerArr[index];

//         setTimeout(nameLater, 1000);

//         function nameLater () {
//             colorSquare = document.getElementById(id);
//             colorSquare.setAttribute("class", "dark" + computerColorClass);
//             index++;
//             computerArrForGame.push(computerColorClass)
//             if (index<1){
//             computerLightUp();
//             }
//         }
//     }





function checkArrs() {
    for (var i = 0; i < computerArrForGame.length; i++) {
        if (playerArr[i] != computerArrForGame[i]) {
            document.getElementById("gameOver").innerHTML = "GAME OVER";
        } else {
            if (document.getElementById("gameOver").innerHTML != "GAME OVER") {
                setTimeout(computerLightUp, 3000);
                index++;
            }
        }
    }
}
    function pushRedClass() {
        playerArr.push("red");
        var clickRedSquare = document.getElementById("0");
        clickRedSquare.removeAttribute("class");
        clickRedSquare.setAttribute("class", "red");
        setTimeout(function () {
            clickRedSquare.removeAttribute("class");
            clickRedSquare.setAttribute("class", "darkred");
        }, 1000)
        console.log("PlayerArr", playerArr);
        checkArrs();

    }

    function pushBlueClass() {
        playerArr.push("blue");
        var clickBlueSquare = document.getElementById("1");
        clickBlueSquare.removeAttribute("class");
        clickBlueSquare.setAttribute("class", "blue");
        setTimeout(function () {
            clickBlueSquare.removeAttribute("class");
            clickBlueSquare.setAttribute("class", "darkblue");
        }, 1000)
        console.log("PlayerArr", playerArr);
        checkArrs();

    }

    function pushYellowClass() {
        playerArr.push("yellow");
        var clickYellowSquare = document.getElementById("2");
        clickYellowSquare.removeAttribute("class");
        clickYellowSquare.setAttribute("class", "yellow");
        setTimeout(function () {
            clickYellowSquare.removeAttribute("class");
            clickYellowSquare.setAttribute("class", "darkyellow");
        }, 1000)
        console.log("PlayerArr", playerArr);
        checkArrs();

    }

    function pushGreenClass() {
        playerArr.push("green");
        var clickGreenSquare = document.getElementById("3");
        clickGreenSquare.removeAttribute("class");
        clickGreenSquare.setAttribute("class", "green");
        setTimeout(function () {
            clickGreenSquare.removeAttribute("class");
            clickGreenSquare.setAttribute("class", "darkgreen");
        }, 1000)
        console.log("PlayerArr", playerArr);
        checkArrs();

    }



