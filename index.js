
// for mouse click event listner play sound when any key image is cliked

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonPressed = this.innerHTML;

        //    animation(buttonPressed);

        switch (buttonPressed) {
            case "w":
                let soudW = new Audio("sounds/crash.mp3");
                soudW.play();
                animation(".w");
                break;
            case "a":
                let soudA = new Audio("sounds/kick-bass.mp3");
                soudA.play();
                animation(".a");
                break;
            case "s":
                let soudS = new Audio("sounds/snare.mp3");
                soudS.play();
                animation(".s")
                break;
            case "d":
                let soudD = new Audio("sounds/tom-1.mp3");
                soudD.play();
                animation(".d");
                break;
            case "j":
                let soudJ = new Audio("sounds/tom-2.mp3");
                soudJ.play();
                animation(".j");
                break;
            case "k":
                let soudK = new Audio("sounds/tom-3.mp3");
                soudK.play();
                animation(".k");
                break;
            case "l":
                let soudL = new Audio("sounds/tom-4.mp3");
                soudL.play();
                animation(".l");
                break;

            default: console.log(buttonPressed);
        }
    });
}

// for keyboard event listener and play sound when any key is pressed

document.addEventListener("keydown",
    function (event) {
        switch (event.key) {
            case "w":
                let soudW = new Audio("sounds/crash.mp3");
                soudW.play();
                animation(".w");
                break;
            case "a":
                let soudA = new Audio("sounds/kick-bass.mp3");
                soudA.play();
                animation(".a");
                break;
            case "s":
                let soudS = new Audio("sounds/snare.mp3");
                soudS.play();
                animation(".s");
                break;
            case "d":
                let soudD = new Audio("sounds/tom-1.mp3");
                soudD.play();
                animation(".d");
                break;
            case "j":
                let soudJ = new Audio("sounds/tom-2.mp3");
                soudJ.play();
                animation(".j");
                break;
            case "k":
                let soudK = new Audio("sounds/tom-3.mp3");
                soudK.play();
                animation(".k");
                break;
            case "l":
                let soudL = new Audio("sounds/tom-4.mp3");
                soudL.play();
                animation(".l");
                break;

            default: console.log(buttonPressed);
        }
    });


// for animation clik and key board event

function animation(key) {
    document.querySelector(key).classList.add("pressed");

    setTimeout(function () {
        document.querySelector(key).classList.remove("pressed");  //to remove class
    }, 100);

}

