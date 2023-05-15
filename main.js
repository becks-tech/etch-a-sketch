const container = document.querySelector('.container');
const newSketch = document.querySelector('.new')
const reset = document.querySelector('.reset')

function createGrid(rows,cols){
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
createGrid(10,10)