const canvasTriangle = document.getElementById("triangle").getContext("2d");
const select = document.getElementById("triangles");
const colorInput = document.getElementById("color");
const drawButton = document.getElementById("draw");

//Dimension and coordinates of the main triangle
const mainSideLength = 600;

/*This space is needed so this can be equilateral triangle, it is space between top point of triangle and top side of square*/
const whiteSpace = 600 - (600 * Math.sqrt(3)) / 2;

const mainTriangle = {
  firstPoint: {
    x: 0,
    y: mainSideLength,
  },
  secondPoint: {
    x: mainSideLength / 2,
    y: whiteSpace,
  },
  thirdPoint: {
    x: mainSideLength,
    y: mainSideLength,
  },
};

//this function draws triangle in canvas with fill color and three points in space
const drawTriangle = (triangle, fillStyle) => {
  const { firstPoint, secondPoint, thirdPoint } = triangle;

  canvasTriangle.fillStyle = fillStyle;
  canvasTriangle.beginPath();
  canvasTriangle.moveTo(firstPoint.x, firstPoint.y);
  canvasTriangle.lineTo(secondPoint.x, secondPoint.y);
  canvasTriangle.lineTo(thirdPoint.x, thirdPoint.y);
  canvasTriangle.closePath();
  canvasTriangle.fill();
};

const mainDrawFunc = () => {
  let num = select.options[select.selectedIndex].value;
  let color = colorInput.value;
  //Drawing main triangle
  drawTriangle(mainTriangle, color);
  //Drawing transparent triangles
  sierpianTriangle(mainSideLength, mainTriangle.secondPoint, num - 1);
};

drawButton.addEventListener("click", mainDrawFunc);

const triangleHeight = (side) => {
  return (side * Math.sqrt(3)) / 2;
};

//counter represents the number of triangles that we want in depth
const sierpianTriangle = (length, topPoint, counter) => {
  const height = triangleHeight(length);

  //this is the middle triangle that we want to draw in one which is passed
  const triangle = {
    firstPoint: {
      x: topPoint.x - length / 4,
      y: topPoint.y + height / 2,
    },
    secondPoint: {
      x: topPoint.x + length / 4,
      y: topPoint.y + height / 2,
    },
    thirdPoint: {
      x: topPoint.x,
      y: topPoint.y + height,
    },
  };

  drawTriangle(triangle, "white");

  //Next points are tops of the left, right and upper triangles seen from the middle one
  const topPoint2 = {
    x: topPoint.x,
    y: topPoint.y,
  };

  const topPoint3 = {
    x: triangle.firstPoint.x,
    y: triangle.firstPoint.y,
  };

  const topPoint4 = {
    x: triangle.secondPoint.x,
    y: triangle.secondPoint.y,
  };

  //For every one of them we call recursion to certain level
  if (counter > 0) {
    sierpianTriangle(length / 2, topPoint2, counter - 1);
    sierpianTriangle(length / 2, topPoint3, counter - 1);
    sierpianTriangle(length / 2, topPoint4, counter - 1);
  }
};
