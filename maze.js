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

function findWayOut(maze, position = 0, row, column, direction = 'S', path) {
    if ( column < 0 || row < 0 ) return; 
    if ( column >= maze[0].length || row >= maze.length ) return;
  
    path[position] = direction;
    position++;
  
    if ( maze[row][column] === 'e') {
      console.log( 'found path :', path);
      return;
    }
  
    if (maze[row][column] === ' ') {
      maze[row][column] = 'x';
      findWayOut(maze, position, row, column -1, 'L', path);
      findWayOut(maze, position, row -1, column, 'U', path);
      findWayOut(maze, position, row, column +1, 'R', path);
      findWayOut(maze, position, row +1, column, 'D', path);
      maze[row][column] = ' ';
    }
    position--;
  }

  findWayOut(maze, 0 , 0 , 0 , 'S' , [] )