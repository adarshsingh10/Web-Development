// document.querySelector("h1").style.color = "red";                                // By normal JS DOM
// $("h1").css("color", "red");                                                        // By jQuery

// $("h1").addClass("big-title margin-50");                                         // Add class
// $("h1").removeClass("big-title");                                                    //Remove Class

// $("h1").text("Bye");                                                             // Setting the text
// $("button").text("Dont click me");
// $("button").html("<em>Hey</em>")                                                   // Changing the html

// $("a").attr("href", "https://www.facebook.com");                                 // Setting attribute

// $("h1").click(() => {
//     $("h1").css("color", "purple");
// })

// let numOfButtons = document.querySelectorAll("button").length
// for (let i=0; i<numOfButtons; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", () => {
//         let buttonId = document.querySelectorAll("button")[i].getAttribute("id");
//         console.log(buttonId);
//     })
// }

// $("button").click(() => {                                                   // Selects all the buttons present in the documen
//     $("h1").css("color", "purple");
// })

// $("input").keydown((event) => {
//     console.log(event.key);
// })

// $(document).keydown((event) => {
//     $("h1").text(event.key);
// })

// $("h1").click("mouseover", () => {
//     $("h1").css("color", "purple");
// })

// $("h1").before("<button>New</button>");
// $("h1").after("<button>New</button>");
// $("h1").prepend("<button>New</button>");
// $("h1").append("<button>New</button>");
// $("button")[2].remove()

$("button").on("click", () => {
    // $("h1").fadeToggle();
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
})