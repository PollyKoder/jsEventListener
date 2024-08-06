//const page = document.getElementById("bodyId");
const grief = document.getElementById("stages");
let qBlock = 0;

function denialAnger() {
  grief.addEventListener("click", function () {
    alert("Use your keyboard please");
  });
}

denialAnger();
//console.log(grief);

// let whatStage = 0;
// function anger() {
//     grief.addEventListener("keyup", )
const page = document.querySelector("#bodyId");
function whatStage() {
  
  document.body.addEventListener("keyup", (ev) => {
    if (jumping === 1 && ev.key === " ") {
        girlJumps.style.opacity="100%";
        setTimeout(()=> {
            girlJumps.style.opacity="0%"; 
        }, 150)
        console.log(girlJumps)
    }
    if (qBlock > 0) return;
    if (ev.key == "w") {
      page.classList.add("anger");
      page.classList.remove("denial");
      page.classList.remove("bargaining");
      page.classList.remove("depression");
      page.classList.remove("acceptanceQ");
      qBlock = 0;
    }
    if (ev.key == "a") {
      page.classList.add("bargaining");
      page.classList.remove("denial");
      page.classList.remove("anger");
      page.classList.remove("depression");
      page.classList.remove("acceptanceQ");
      qBlock = 0;
    }
    if (ev.key == "s") {
      page.classList.add("depression");
      page.classList.remove("denial");
      page.classList.remove("anger");
      page.classList.remove("bargaining");
      page.classList.remove("acceptanceQ");
      qBlock = 0;
    }
    if (ev.key == "d") {
      page.classList.add("acceptanceQ");
      page.classList.remove("denial");
      page.classList.remove("anger");
      page.classList.remove("bargaining");
      page.classList.remove("depression");
      qBlock = 1;
    }
    
    console.log(ev.key);
    whatLetter(page);
    //Make "R" or "Esc" button tied to the denial class, to have the user return to the first stage? only have it appear acceptanceA?
  });
}

const typeField = document.querySelector("#inputUnlock");
console.log(typeField);
let acceptPassword = "gris";
typeField.addEventListener("change", (e) => {
  //alert("!");
  
  let attemptPassword = typeField.value.toLowerCase();
  if (acceptPassword.startsWith(attemptPassword)) {
    typeField.style.border = "2px solid green";
  } else {
    typeField.style.border = "2px solid red";
  }
  //console.log(attemptPassword);
});
const girl = document.querySelector("#preSpace");
const girlJumps = document.querySelector("#postSpace");
let jumping = 0;
typeField.addEventListener("keyup", (ev) => {
    if (ev.key === "Enter" && page.classList.contains("acceptanceQ") && typeField.value.toLowerCase() === acceptPassword) {
       page.classList.add("acceptanceUnlock");
       typeField.style.display = "none";
       grief.innerHTML = "Correct!"
       grief.style = "transition: all 0.4s ease"
       //grief.style.backgroundColor = "#586a58"
       grief.style.border = "2px solid #aeffae"
       grief.style.borderRadius="30px"
       setTimeout(()=> {
        girl.style.display="flex";
        girl.style.transform="translateX(0)"
        jumping = 1;
       }, 2000);
    }
});

function whatLetter(page) {
  if (page.classList.contains("anger")) {
    grief.innerHTML = "A";
  } else if (page.classList.contains("bargaining")) {
    grief.innerHTML = "S";
  } else if (page.classList.contains("depression")) {
    grief.innerHTML = "D";
  } else if (page.classList.contains("acceptanceQ")) {
    grief.innerHTML = "What game am I?";
    //NOPE!! Try again... Fix it with html, hide in css and unhide with js?
    //const newInput = document.createElement("input");
    //newInput.classList.add("inputStyle");
    //page.appendChild(newInput);
  }
}

whatStage();
