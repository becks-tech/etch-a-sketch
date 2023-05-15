const container = document.querySelector('.container');

function makeGrid(rows,cols){
    for(let i = 0; i< (rows * cols); i++){
        const grid = document.createElement('div');
            grid.classList.add('grid')  
            container.appendChild(grid);
            grid.addEventListener('mouseover',()=>{
                grid.style.background = 'hsla(97, 100%, 78%, 1)'
            })
    }
    
}

makeGrid(16,16)




