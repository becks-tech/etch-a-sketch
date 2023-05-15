const container = document.querySelector('.container');

function makeGrid(rows,cols){
    for(let i = 0; i< (rows * cols); i++){
        const grid = document.createElement('div');
            grid.classList.add('grid')  
            container.appendChild(grid);
    }
}
makeGrid(16,16)



