let player = 1;
let numberOfCheckers = 0

let createSunChecker = (cell) => {
let div = document.createElement('div');
div.style.cssText = 'width: 6vw; height: 6vh; border: 2px solid orange; background-color: blue ; border-radius: 50%; background: url("./sun.png"); background-position: center; background-size: cover; background-repeat: no-repeat;'
cell.appendChild(div)
}

let CreateEarthChecker = (cell) => {
let divRed = document.createElement('div');
divRed.style.cssText = 'width: 6vw; height: 6vh; border: 2px solid turquoise; background-color: blue ; border-radius: 50%; background: url("./earth.png"); background-position: center; background-size: cover; background-repeat: no-repeat;'
cell.appendChild(divRed)

}

let boardDisplay = [ 
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

let diagonalLeftCheck=()=>{
    for(let i = 0; i < boardDisplay.length - 3; i++){
        for(let j = 0; j < boardDisplay.length - 2; j++){
            if(boardDisplay[i][j] !== null &&
                boardDisplay[i][j] === 1 &&
                boardDisplay[i + 1][j + 1] === 1 &&
                boardDisplay[i + 2][j + 2] === 1 &&
                boardDisplay[i + 3][j + 3] === 1){
                  alert('winner 1');
                  location.reload();
            }
            else if(boardDisplay[i][j] !== null &&
                boardDisplay[i][j] === 2 &&
                boardDisplay[i + 1][j + 1] === 2 &&
                boardDisplay[i + 2][j + 2] === 2 &&
                boardDisplay[i + 3][j + 3] === 2){
                    alert('winner 2');
                    location.reload();
            }
               
        }        
            
    }
}

let diagonalRightCheck=()=>{
    for(let i = boardDisplay.length - 3; i < boardDisplay.length; i++){
        for(let j = 0; j <= boardDisplay.length; j++){
            if(boardDisplay[i][j] !== null &&
               boardDisplay[i][j] === 1 &&
               boardDisplay[i - 1][j + 1] === 1 &&
               boardDisplay[i - 2][j + 2] === 1 &&
               boardDisplay[i - 3][j + 3] === 1){
                   alert('winner 1')
                   location.reload()
            }
            else if(boardDisplay[i][j] !== null &&
                boardDisplay[i][j] === 2 &&
                boardDisplay[i - 1][j + 1] === 2 &&
                boardDisplay[i - 2][j + 2] === 2 &&
                boardDisplay[i - 3][j + 3] === 2){
                    alert('winner 2')
                    location.reload()
             }
        }
    }
}

let verticalCheck=()=>{
    for(let i = 0; i <boardDisplay.length - 2; i++){
        for(let j = 0; j < boardDisplay.length + 1; j++){
            if(boardDisplay[i][j] !== null &&
               boardDisplay[i][j] === 1 &&
               boardDisplay[i + 1][j] === 1 &&
               boardDisplay[i + 2][j] === 1 &&
               boardDisplay[i + 3][j] === 1){
                let winner = document.createElement('h1');
                let winnerMessage = document.createTextNode('Winner Sun');
                winner.appendChild(winnerMessage);
                let board = document.querySelector('.column');
                board.appendChild(winner)
                board.style.cssText='width:100%; height:100%; background-color:black;'
                location.reload();
                
            }
           else if(boardDisplay[i][j] !== null &&
                boardDisplay[i][j] === 2 &&
                boardDisplay[i + 1][j] === 2 &&
                boardDisplay[i + 2][j] === 2 &&
                boardDisplay[i + 3][j] === 2){
                    alert('winner 2')
                    location.reload()
                 
             }
        }
          
    }    
}

let horizontalCheck=()=>{
    for(let i = 0; i < boardDisplay.length; i++){
        for(let j = 0; j < boardDisplay.length - 2; j++){
            if(boardDisplay[i][j] !== null &&
               boardDisplay[i][j] === 1 &&
               boardDisplay[i][j + 1] === 1 &&
               boardDisplay[i][j + 2] === 1 &&
               boardDisplay[i][j + 3] === 1){
                  let winningMessage = document.querySelector('.winningMessage');
                  winningMessage.cssText='background-color:black; opacity:50%'
               

            }
            else if(boardDisplay[i][j] !== null &&
                boardDisplay[i][j] === 2 &&
                boardDisplay[i][j + 1] === 2 &&
                boardDisplay[i][j + 2] === 2 &&
                boardDisplay[i][j + 3] === 2){
                   alert('winner 2')
                   location.reload()
                
 
             }
            

            
        }
    }
}

console.log(boardDisplay)
let updateBoard=()=>{
    let currentColumnId = Number(event.currentTarget.id.slice(-1));
   for(let i = boardDisplay.length-1; i >= 0; i--){
       if(boardDisplay[i][currentColumnId] === null){
           boardDisplay[i][currentColumnId] = player;
           console.log(boardDisplay[i][currentColumnId])
           break
       }
   }
    
}




let changeColor=()=>{
    let four = document.querySelectorAll('.change');
    if(player === 1){
    four[0].style.color = 'orange';
    four[1].style.color = 'orange';
    }
    else{
        four[0].style.color = 'turquoise';
        four[1].style.color = 'turquoise';
    }

    
}
let insertSunChecker=()=>{
    let cells = event.currentTarget;
    if(player === 1){
        let cellArray = cells.children
        for(let i = 0; i < cellArray.length; i++){
            if(cellArray[i].firstElementChild === null){
                createSunChecker(cellArray[i]);
                cellArray[i].style.backgroundColor = 'orange'
                break
            }

            
            
        }
    }
}

let insertEarthChecker=()=>{
    let cells = event.currentTarget;
    if(player === 2){
         let cellArray = cells.children
        for(let i = 0; i < cellArray.length; i++){
            if(cellArray[i].firstElementChild === null){
                CreateEarthChecker(cellArray[i]);
                cellArray[i].style.backgroundColor = 'turquoise'
                break
            }

            
            
        }
    }
}


let playerSwitch=()=>{
    
  if(player === 1){
      player = 2
  }
  else{
      player = 1
  }
  
}

let refreshDom=()=>{
    let button = document.querySelector('#restart');
    button.addEventListener('click', function(event){
        location.reload()
    })

}

let addDisc=()=>{
    changeColor()
    insertSunChecker()
    updateBoard()
    insertEarthChecker()
    playerSwitch()
    horizontalCheck()
    verticalCheck()
    diagonalRightCheck()
    diagonalLeftCheck()
    refreshDom();
    numberOfCheckers++;
    if(numberOfCheckers === 42){
        alert('tied game');
        location.reload();
    }
    
 }
 

let addClickHandler=()=>{
    let columns = document.querySelectorAll('.column');
    for(let i = 0; i < columns.length; i++){
        columns[i].addEventListener('click', addDisc)
    }
}

let game=()=>{
    addClickHandler()
    
}
game();