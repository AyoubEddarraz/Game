// Variable Start btn containerAskName
let start = document.getElementById("spanStart"),
    askName = document.getElementById("containerAskName"),
    startName = document.getElementById("spanSendName");
// allDivGame children in Array


let allDivGame = document.getElementById("allDivGame");
// allDivGame.getAttribute
let blockArray2 = Array.from(allDivGame.children);

let blockArray = Array.from(document.querySelectorAll("#allDivGame .flip-card .flip-card-inner"));

// console.log(blockArray);

// Event Start
start.addEventListener('click' , () => {
    askName.style.transform = ("scale(1)");
})

// Event Name

let nameUser = document.getElementById("nameUser"),
    name = document.getElementById("name");

startName.addEventListener('click' , () => {
    let controllPanel = document.querySelector(".controllePanel");
    controllPanel.remove();
    nameUser.textContent = (`Name : ${name.value === "" ? 'unknown' : name.value}`);
    askName.style.transform = ("scale(0)");
})

// range Array Random
let orderRange = [...(blockArray.keys())]; 

let orderRandom = [];

for (let i = 0 ; i < blockArray.length ; i++){
    let x = Math.random() * blockArray.length,
    y = Math.round(x);

    if (orderRandom.includes(y)){
        i--;
    }else{
        orderRandom.push(y);
    }
}

blockArray2.forEach((item , index) => {
    item.style.order = orderRandom[index];
});

// End range Array Random

// Check Number Of Selected 

let itemCompletArray = [];
let selectedArrayCheck = [];
let goodItem = [];

// End Check Number Of Selected 

// Clear Function

let ClearFunSelected = () =>{
    for(let z = 0 ; z = selectedArrayCheck.length ; z++){
        selectedArrayCheck.shift();
        itemCompletArray.shift();
    }
}
// End Clear Function



// Fleep Function

let failedUser = document.getElementById("failedUser");
let failde = 1;

// Variable Success

sound = document.getElementById("sound");
    
// End Variable Success

for(let r = 0 ; r < blockArray.length ; r++){
    blockArray[r].addEventListener('click' , () => {
        itemCompletArray.push(blockArray[r]);
        selectedArrayCheck.push(blockArray[r].getAttribute("data-animal"));
        blockArray[r].classList.add("flipNow");

        if (selectedArrayCheck.length == 2){
            if(selectedArrayCheck[0] == selectedArrayCheck[1]){
                goodItem.push(selectedArrayCheck[0]);
                goodItem.push(selectedArrayCheck[1]);
                ClearFunSelected();

                if(goodItem.length == blockArray.length){
                    sound.play();
                }
            }else{
                itemCompletArray[0].classList.remove("flipNow");
                itemCompletArray[1].classList.remove("flipNow");
                ClearFunSelected();
                failedUser.textContent = (`Faild : ${failde++} times`);
            }
        }
    })
}

// End Fleep Function 