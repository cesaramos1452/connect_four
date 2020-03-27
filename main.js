let player = 1;
let numberOfDisks = 0;

let createBlackChecker = (cell) => {
let div = document.createElement('div');
div.style.cssText = 'border: 2px solid black; width: 9vw; height: 9vh; background-color: black; border-radius: 50%'
cell.appendChild(div)
}

let CreateRedChecker = (cell) => {
let divRed = document.createElement('div');
divRed.style.cssText = 'border: 2px solid black; width: 9vw; height: 9vh; background-color: red; border-radius: 50%'
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

let updateBoard=()=>{
    let currentColumnId = Number(event.currentTarget.id.slice(-1));
   for(let i = boardDisplay.length-1; i >= 0; i--){
       if(boardDisplay[i][currentColumnId] === null){
           boardDisplay[i][currentColumnId] = player;
        //    console.log(boardDisplay[i][currentColumnId])
           break
       }
   }
    
}

let insertBlackChecker=()=>{
    let cells = event.currentTarget;
    if(player === 1){
        cellArray = cells.children
        for(let i = 0; i < cellArray.length; i++){
            if(cellArray[i].firstElementChild === null){
                createBlackChecker(cellArray[i]);
                break
            }

            
            
        }
    }
}

let insertRedChecker=()=>{
    let cells = event.currentTarget;
    if(player === 2){
        cellArray = cells.children
        for(let i = 0; i < cellArray.length; i++){
            if(cellArray[i].firstElementChild === null){
                CreateRedChecker(cellArray[i]);
                break
            }

            
            
        }
    }
}



let addDisc=()=>{
       insertBlackChecker()
       updateBoard()
       insertRedChecker()
       playerSwitch()
       
    }
   


let playerSwitch=()=>{
  if(player === 1){
      player = 2
  }
  else if(player === 2){
      player = 1
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








// if(player){
        
//     let columnCell = event.currentTarget.firstElementChild;
//     if(columnCell.firstElementChild === null){
//         createBlackChecker(columnCell)
//         playerSwitch()
       
//     }
//     else if(columnCell.firstElementChild != null){
//        createBlackChecker(columnCell.nextElementSibling)
//         playerSwitch()
        
//     }
// }
// else if(!player){
//     let columnCell = currentColumn.firstElementChild;
//     if(columnCell.firstElementChild === null){
//        CreateRedChecker(columnCell)
//        playerSwitch()
       
//     }
//     else if(columnCell.firstElementChild != null){
//        CreateRedChecker(columnCell.nextElementSibling)
//        playerSwitch()
//     }
// }




// let one = document.querySelector('#column1').children
// console.log(one)

// for(let i = 0; i < one.length; i++){
//     console.log(one[1])
//     break;
// }
