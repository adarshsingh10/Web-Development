// alert("Hello");
// ----------------------- For First Button Click ---------------------------

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert("I got clicked");
// }

// ----------------Or----------------
let numberOfDrumButtons = document.querySelectorAll(".drum").length;                //Getting the number of Drums Button with call drum

for (let i=0; i<numberOfDrumButtons; i++)   {
    document.querySelectorAll(".drum")[i].addEventListener("click",  () => {
            // alert("I got clicked");
            let val = document.querySelectorAll(".drum")[i].innerHTML;

            if(val == "w") {
                var audio = new Audio('./sounds/tom-1.mp3');                // audio is an object and Audio is a constructor function
                buttonAnimation("w");
            }
            if(val == "a") {
                var audio = new Audio('./sounds/tom-2.mp3');
                buttonAnimation("a");
            }
            if(val == "s") {
                var audio = new Audio('./sounds/tom-3.mp3');
                buttonAnimation("s");
            }
            if(val == "d") {
                var audio = new Audio('./sounds/tom-4.mp3');
                buttonAnimation("d");
            }
            if(val == "j") {
                var audio = new Audio('./sounds/snare.mp3');
                buttonAnimation("j");
            }
            if(val == "k") {
                var audio = new Audio('./sounds/crash.mp3');
                buttonAnimation("k");
            }
            if(val == "l") {
                var audio = new Audio('./sounds/kick-bass.mp3');
                buttonAnimation("l");
            }
            audio.play();
        }
    );
}

document.addEventListener("keydown", (event) => {
    // alert("Key pressed");
    val = event.key;
    buttonAnimation(val);
    let audio;
    if(val == "w") {
        audio = new Audio('./sounds/tom-1.mp3');                // audio is an object and Audio is a constructor function
    }
    if(val == "a") {
        audio = new Audio('./sounds/tom-2.mp3');
    }
    if(val == "s") {
        audio = new Audio('./sounds/tom-3.mp3');
    }
    if(val == "d") {
        audio = new Audio('./sounds/tom-4.mp3');
    }
    if(val == "j") {
        audio = new Audio('./sounds/snare.mp3');
    }
    if(val == "k") {
        audio = new Audio('./sounds/crash.mp3');
    }
    if(val == "l") {
        audio = new Audio('./sounds/kick-bass.mp3');
    }
    audio.play();
});

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    console.log("Active Button is ", activeButton); // <button class=​"w drum" style=​"color:​ rgb(218, 4, 99)​;​">​w​</button>​
    activeButton.classList.add("pressed");
    activeButton.style.color = "white";
    setTimeout(() => {
        activeButton.classList.remove("pressed");
        activeButton.style.color = "#DA0463";
    }, 100);
}
