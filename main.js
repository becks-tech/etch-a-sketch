const container = document.querySelector('.container');
const newBtn = document.querySelector('.new')
const clear = document.querySelector('.clear')
const picker = document.querySelector('.picker')
const hexArray = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'] 

const buttons = document.querySelectorAll('input');

function createGrid(number){

    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    for(let i = 0; i< number * number; i++){
        let grid = document.createElement('div'); 
            container.appendChild(grid);

            grid.addEventListener('mouseover',()=>{
                grid.style.background = 'black';
            })
            
            //sketch function, need to add random colors
            buttons.forEach(button =>{
                button.addEventListener('click', ()=>{
                    if(button.value == 'Rainbow'){
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
                    else if (button.value == 'Erase'){
                        grid.addEventListener('mouseover', ()=>{
                            grid.style.background = 'white';
                        })

                    }
                        picker.addEventListener('change',(e)=>{
                            grid.addEventListener('mouseover', ()=>{
                                grid.style.background = e.target.value
                            })
                            
                        })
                })
            })
    }
    
}
createGrid(32)



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
