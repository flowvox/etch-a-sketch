const container = document.querySelector('div.container');

function addDivBoard(sqNumber){
    // clearBoard()
    for(let i=0;i<(sqNumber*sqNumber);i++){
        let box = document.createElement("div")
        box.setAttribute('class','innerbox')
        container.appendChild(box)
        console.log("appended")
    }
    

}

function clearBoard(){
    while(container.firstChild){//Checks for the first child(one by one all) of the parent, if exisits then loop runs and removes it.
        container.removeChild(container.firstChild)
    }
}

addDivBoard(16)