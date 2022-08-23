let count = 1;

// seleceted function 
function selectedElement(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    
    const newRow = document.createElement("tr");
    
    const playerNo = document.createElement("th");
    playerNo.innerText = count;
    newRow.appendChild(playerNo);
    
    const newPlayer = document.createElement("th");
    newPlayer.innerText = playerName;
    newRow.appendChild(newPlayer);
    
    const tableBody = document.getElementById("table-body");
    
    if (count <= 5) {
        tableBody.appendChild(newRow);
        count++
    }
    else {
        return alert("You Already Added 5 Players")
    }
    
    const btnNone = element.parentNode;
    btnNone.style.display = "none";
    
    const card = element.parentNode.parentNode;
    const NewBtn = document.createElement("button");
    NewBtn.classList.add("btn")
    NewBtn.classList.add("btn-disable")
    NewBtn.innerText = "Select";
    card.appendChild(NewBtn);
}

// common function 
function inputField(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputValue.value);
    return inputFieldValue;
}

// calculate function 
document.getElementById("calculate-btn").addEventListener("click", function () {
    const tableBody = document.getElementById("table-body");
    const playerNo = parseFloat(tableBody.lastChild.children[0].innerText);
    
    const playerBubget = inputField("player-budget");
    
    const calculate = playerNo * playerBubget;
    console.log(calculate);

    const expenses = document.getElementById("expenses").innerText = calculate;
})

// calculate total function

