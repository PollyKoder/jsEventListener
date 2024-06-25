//const page = document.getElementById("bodyId");
const grief = document.getElementById("stages");


function denialAnger() {
    grief.addEventListener("click", function() {alert("Use your keyboard please")});
}

denialAnger();
//console.log(grief);


// let whatStage = 0;
// function anger() {
//     grief.addEventListener("keyup", )
function whatStage(){
    const page = document.querySelector("#bodyId");
    document.body.addEventListener("keyup", (ev) => {
        if (ev.key == "w") {
            page.classList.add("anger")
            page.classList.remove("denial")
            page.classList.remove("bargaining")
            page.classList.remove("depression")
            page.classList.remove("acceptanceQ")
        }
        if (ev.key == "a") {
            page.classList.add("bargaining")
            page.classList.remove("denial")
            page.classList.remove("anger")
            page.classList.remove("depression")
            page.classList.remove("acceptanceQ")
        }
        if (ev.key == "s") {
            page.classList.add("depression")
            page.classList.remove("denial")
            page.classList.remove("anger")
            page.classList.remove("bargaining")
            page.classList.remove("acceptanceQ")
        }
        if (ev.key == "d") {
            page.classList.add("acceptanceQ")
            page.classList.remove("denial")
            page.classList.remove("anger")
            page.classList.remove("bargaining")
            page.classList.remove("depression")
        }
        whatLetter(page);
        //Make "R" or "Esc" button tied to the denial class, to have the user return to the first stage? only have it appear acceptanceA?
    });
};

function whatLetter(page) {
    if (page.classList.contains("anger")) {
        grief.innerHTML = "A";
    } else if (page.classList.contains("bargaining")) {
        grief.innerHTML = "S";
    } else if (page.classList.contains("depression")) {
        grief.innerHTML = "D";
    } else if (page.classList.contains("acceptanceQ")) {
        grief.innerHTML = "What game am I?"
    }
}

whatStage();
