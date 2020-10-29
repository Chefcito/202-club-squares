window.addEventListener('load', () => {
  
  let rect1 = {
    cords: [1, 2],
    width: 2,
    height: 2,
    path: {},
  }
  
  
  let rect2 = {
    cords: [2, 2],
    width: 2,
    height: 3,
    path: {},
  }
  
  let rect3 = {
    cords: [10, 2],
    width: 2,
    height: 3,
    path: {},
  }
  
  let makePath = (cords, width, height) => {
    let path = {
      pathX: [],
      pathY: [],
    };
    
    for(let i = 0; i <= width; i++) {
      path.pathX.push(cords[0] + i);
    }
    
    for(let i = 0; i <= height; i++) {
      path.pathY.push(cords[1] + i);
    }
    
    return path;
  }
  
  rect1.path = makePath(rect1.cords, rect1.width, rect1.height);
  rect2.path = makePath(rect2.cords, rect2.width, rect2.height);
  rect3.path = makePath(rect3.cords, rect3.width, rect3.height);

  let makeIntersection = (rect1, rect2) => {
    let pathX = [];
    let pathY = [];

    let rect1PathX = rect1.path.pathX;
    let rect1PathY = rect1.path.pathY;
    let rect2PathX = rect2.path.pathX;
    let rect2PathY = rect2.path.pathY;

    for(let i = 0; i < rect1PathX.length; i++) {
      for (let j = 0; j < rect2PathX.length; j++) {
        if(rect1PathX[i] === rect2PathX[j]) pathX.push(rect1PathX[i]);
      } 
    }

    for(let i = 0; i < rect1PathY.length; i++) {
      for (let j = 0; j < rect2PathY.length; j++) {
        if(rect1PathY[i] === rect2PathY[j]) pathY.push(rect1PathY[i]);
      } 
    }

    if(pathX.length === 0 || pathY.length === 0) return null;

    let rect = {
      cords: [pathX[0], pathY[0]],
      width: pathX[pathX.length-1] - pathX[0],
      height: pathY[pathY.length-1] - pathY[0],
    };

    return rect;
  }
  
  let intersection = makeIntersection(rect1, rect2);
  console.log(intersection);
});