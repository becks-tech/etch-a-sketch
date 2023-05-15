const container = document.querySelector('.container');
const newSketch = document.querySelector('.new')
const reset = document.querySelector('.reset')



function resetGrid(rows,cols){
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for(let i = 0; i< rows * cols; i++){
        let grid = document.createElement('div');
            grid.classList.add('grid')  
            container.appendChild(grid);
            grid.addEventListener('mouseover',()=>{
                grid.style.background = 'hsla(97, 100%, 78%, 1)'
            })
    }
}

reset.addEventListener('click', ()=>{
   resetGrid(10,10)
    
})

newSketch.addEventListener('click', ()=>{
   
    let userInput = prompt('Choose number of squares per side, i.e. 64 for 64x64 grid')
    container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;

    for(let i = 0; i< userInput * userInput; i++){
        let grid = document.createElement('div');
            grid.classList.add('grid')  
            container.appendChild(grid);
            grid.addEventListener('mouseover',()=>{
                grid.style.background = 'hsla(97, 100%, 78%, 1)'
            })
    }
    
})

