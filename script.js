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
            page.classList.toggle("anger")
        }
        if (ev.key == "a") {
            page.classList.toggle("bargaining")
        }
        if (ev.key == "s") {
            page.classList.toggle("depression")
        }
        if (ev.key == "d") {
            page.classList.toggle("acceptanceQ")
        }
        whatLetter();
    });
};

function whatLetter() {
    if (page.classList("anger") === true) {
        grief.innerHTML("A");
    }
    if (page.classList("bargaining") === true) {
        grief.innerHTML("S");
    }
}

whatStage();
