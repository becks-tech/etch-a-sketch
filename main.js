const container = document.querySelector('.container');
const newBtn = document.querySelector('.new')
const clear = document.querySelector('.clear')

function createGrid(number){

    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    for(let i = 0; i< number * number; i++){
        let grid = document.createElement('div'); 
            container.appendChild(grid);
            grid.style.border = '0.2px solid maroon'
            
            //sketch function, need to add random colors
            grid.addEventListener('mouseover',()=>{
                grid.style.background = 'black'
            })
    }
    
}
createGrid(16)

clear.addEventListener('click', ()=>{
    //clear grid
    container.childNodes.forEach((child)=>
    child.style.background="white"
    )
})

function newSketch(){
    container.textContent = ''
    let userInput = prompt('Enter canvas size, 0 - 100:');
    if (userInput > 100 || userInput < 0){
        alert("Invalid number. Please choose a number from 0 to 100")
    }
    while (userInput > 0 && userInput <= 100){
        createGrid(userInput)
        break;
    }
    
}

newBtn.addEventListener('click',newSketch)
