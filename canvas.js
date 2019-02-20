// Learning source: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

function draw() {
  // accessing canvas node
  var canvas = document.getElementById('tutorial');
  // if `canvas` is supported by browser
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgb(255,255,255)';
    // console.log(ctx);
    ctx.fillStyle = 'rgb(200, 200, 200)';
    // ctx.fillRect(10, 10, 50, 50);

    // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // ctx.fillRect(30, 30, 50, 50);
    // ctx.clearRect(50, 50, 50, 50);
    // ctx.strokeStyle = 'rgb(200, 0, 0)';
    // ctx.strokeRect(60, 60, 50, 50);

    // draw a triangle
    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.fill();

    //// arcs
    // row loop
    // for (var i = 0; i < 4; i++) {
    //   // column loop
    //   for (var j = 0; j < 3; j++) {
    //     // getting ready to create new path
    //     ctx.beginPath();
    //     // x coordinate
    //     var x = 25 + j * 50;
    //     // y coordinate
    //     var y = 25 + i * 50;
    //     //arc radius
    //     var radius = 17;
    //     // start angle (calculated from x axis and is measured in radians)
    //     var startAngle = 0;
    //     // end angle on circle
    //     // PI(3.14...) radians =  180deg
    //     var endAngle = Math.PI + (Math.PI * j) / 2;
    //     // draw clockwise or anti-clockwise
    //     var anticlockwise = i % 2 !== 0;

    //     // draw arc
    //     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    //     // fill or stroke
    //     if (i > 1) {
    //       ctx.fill();
    //     } else {
    //       ctx.stroke();
    //     }
    //   }
    // }

    //////////////
    // BEZIER AND QUADRATIC CURVES
    //////////////

    // //// Quadratic bezier curves ////
    // // setting up to start drawing
    // ctx.beginPath();
    // // moving pen
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // // painting with stroke
    // ctx.stroke();

    //// Cubic bexier curves ////
    //setting up to start drawing
    ctx.beginPath();
    // move pen
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80)

    // painting with stroke
    ctx.stroke();
  }
}
