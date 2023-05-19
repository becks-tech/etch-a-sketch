const container = document.querySelector('.container');
const newBtn = document.querySelector('.new')
const clear = document.querySelector('.clear')
const hexArray = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'] 

function createGrid(number){

    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    for(let i = 0; i< number * number; i++){
        let grid = document.createElement('div'); 
            container.appendChild(grid);
            grid.style.border = '0.2px solid maroon'
            
            //sketch function, need to add random colors
            grid.addEventListener('mouseover',()=>{
                let hexColor = '#';
                for(let i = 0; i< 6; i++){
                    //bracket notation object[expression] arrays are objects, evaluates to 
                    //hexArray[generateRandomNumber()] and returns random number which then 
                    //is assigned to element in hexArray and appended to hexColor
                    hexColor += hexArray[generateRandomColor()];
                }
                grid.style.background = hexColor;
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

function generateRandomColor(){
    return Math.floor(Math.random() * hexArray.length)
}


newBtn.addEventListener('click',newSketch)
