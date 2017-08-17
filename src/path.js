import {
  TILE_TYPE_PATH,
  PATH_LOCATION_STATUS_INVALID,
  PATH_LOCATION_STATUS_VALID,
  PATH_LOCATION_STATUS_BLOCKED,
  PATH_LOCATION_STATUS_VISITED,
  PATH_LOCATION_STATUS_END } from './constants';

export default class Path {
  constructor(start, end, grid) {
    this.start = start;
    this.end = end;
    this.grid = JSON.parse(JSON.stringify(grid));
  }

  findShortestPath() {
    const distanceFromTop = this.start[0];
    const distanceFromLeft = this.start[1];

    // Each "location" will store its coordinates
    // and the shortest path required to arrive there
    const location = {
      distanceFromTop,
      distanceFromLeft,
      path: [],
      status: 'Start'
    };

    // Initialize the queue with the start location already inside
    const queue = [location];
    let newPath = [];

    // Loop through the grid searching for the goal
    while (queue.length > 0) {
      // Take the first location off the queue
      const currentLocation = queue.shift();

      const directions = ['N', 'E', 'S', 'W'];

      directions.some(dir => {
        const newLocation = this.exploreInDirection(currentLocation, dir, this.grid);

        if (newLocation.status === PATH_LOCATION_STATUS_END) {
          newPath = newLocation.path;
          return true;
        } else if (newLocation.status === PATH_LOCATION_STATUS_VALID) {
          queue.push(newLocation);
        }
      });
    }

    // No valid path found
    return newPath.length ? this.generateForGrid(newPath) : false;
  }

  generateForGrid(newPath) {
    const path = [];

    path.push(this.start);

    let currentPath = this.start;

    newPath.forEach(dir => {
      let nextPath;

      switch (dir) {
        case 'N':
          nextPath = [currentPath[0] - 1, currentPath[1]];
          break;
        case 'E':
          nextPath = [currentPath[0], currentPath[1] + 1];
          break;
        case 'S':
          nextPath = [currentPath[0] + 1, currentPath[1]];
          break;
        case 'W':
          nextPath = [currentPath[0], currentPath[1] - 1];
          break;
      }

      currentPath = [...nextPath];

      path.push(nextPath);
    });

    return path;
  }

  locationStatus(location, grid) {
    const gridSize = grid.length;
    const dft = location.distanceFromTop;
    const dfl = location.distanceFromLeft;

    // TODO: simplify this, we only need end or valid
    if (location.distanceFromLeft < 0 ||
        location.distanceFromLeft >= gridSize ||
        location.distanceFromTop < 0 ||
        location.distanceFromTop >= gridSize) {

      // location is not on the grid--return false
      return PATH_LOCATION_STATUS_INVALID;
    } else if (grid[dft][dfl] !== TILE_TYPE_PATH) {
      // location is either an obstacle or has been visited
      return PATH_LOCATION_STATUS_BLOCKED;
    } else if (dft === this.end[0] && dfl === this.end[1]) {
      return PATH_LOCATION_STATUS_END;
    } else {
      return PATH_LOCATION_STATUS_VALID;
    }
  }

  exploreInDirection(currentLocation, direction, grid) {
    const newPath = currentLocation.path.slice();
    newPath.push(direction);

    let dft = currentLocation.distanceFromTop;
    let dfl = currentLocation.distanceFromLeft;

    if (direction === 'N') {
      dft -= 1;
    } else if (direction === 'E') {
      dfl += 1;
    } else if (direction === 'S') {
      dft += 1;
    } else if (direction === 'W') {
      dfl -= 1;
    }

    const newLocation = {
      distanceFromTop: dft,
      distanceFromLeft: dfl,
      path: newPath,
      status: 'Unknown'
    };

    newLocation.status = this.locationStatus(newLocation, grid);

    // If this new location is valid, mark it as 'Visited'
    if (newLocation.status === PATH_LOCATION_STATUS_VALID) {
      grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] =
        PATH_LOCATION_STATUS_VISITED;
    }

    return newLocation;
  }
}


// // OK. We have the functions we need--let's run them to get our shortest path!

// // Create a 4x4 grid
// // Represent the grid as a 2-dimensional array
// var gridSize = 4;
// var grid = [];
// for (var i=0; i<gridSize; i++) {
//   grid[i] = [];
//   for (var j=0; j<gridSize; j++) {
//     grid[i][j] = 'Empty';
//   }
// }

// // Think of the first index as "distance from the top row"
// // Think of the second index as "distance from the left-most column"

// // This is how we would represent the grid with obstacles above
// grid[0][0] = "Start";
// grid[2][2] = "End";

// grid[1][1] = "Obstacle";
// //grid[1][2] = "Obstacle";
// grid[1][3] = "Obstacle";
// grid[2][1] = "Obstacle";

// console.log(findShortestPath([0,0], grid));