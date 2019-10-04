let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

function Maze(maze, x=0, y=0, visited=[], steps=''){
    if (maze[y][x]==='e'){
        return steps
    }
     visited.push(`[${y}][${x}]`)
     if (y+1 <maze.length){
         if( maze[y+1][x] !=='*' && !visited.includes(`[${y+1}][${x}]`)){

             if(Maze(maze, x, y+1, [...visited], steps+'D')){
                 return console.log('Path to exit '+Maze(maze, x, y+1, [...visited], steps+'D'))
             }
         }
     }
     if (x+1 < maze[y].length){
         if(maze[y][x+1] !=='*' && !visited.includes(`[${y}][${x+1}]`)){

            if(Maze(maze, x+1, y, [...visited], steps+'R')){
                return (console.log('Path to exit '+Maze(maze, x+1, y, [...visited], steps+'R')))
            }
         }
     }
     if(y-1 >=0){
         if(maze[y-1][x] !=='*' && !visited.includes(`[${y-1}][${x}]`)){

            if(Maze(maze, x, y-1, [...visited], steps+'U')){
                return console.log('Path to exit '+Maze(maze, x, y-1, [...visited], steps+'U'))
            }

     }
     if(x-1 >= 0){
        if(maze[y][x-1] !=='*' && !visited.includes(`[${y}][${x-1}]`)) {

            if(Maze(maze, x-1, y, [...visited], steps+'L')){
                return console.log('Path to exit '+Maze(maze, x-1, y, [...visited], steps+'L'))
            }

     }
}
}}   

Maze(maze)