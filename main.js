const container = document.querySelector('.container');
const newBtn = document.querySelector('.new')


function createGrid(number){

    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;

    for(let i = 0; i< number * number; i++){
        let grid = document.createElement('div'); 
            container.appendChild(grid);
            grid.style.border = '1px solid lightgray'
            
            //sketch function
            grid.addEventListener('mouseover',()=>{
                grid.style.background = 'hsla(97, 100%, 78%, 1)'
            })
    }
    
}
createGrid(16)

function newSketch(){
    let userInput = prompt('Enter canvas size, 0 - 100:');
    createGrid(userInput)

}

newBtn.addEventListener('click',newSketch)
