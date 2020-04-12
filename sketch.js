let capture
let tracker

let hearts=[]
let nose=[]

function setup() {

    createCanvas(800, 600).parent('p5')

    // start capturing video
    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

    // create the tracker
    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)

    for (let i=0; i<12 ; i++){

      let random_heart= {
        x:random(200,600),
        y:70,
        vx:random(1,7),
        vy:.8,
        color:[random(180,250),random(0,150),random(90,165)]
       }

        hearts.push(random_heart)
      }

}

function draw() {

    // draw background stuff
    background(0)

    // // show the mirrored video feed
    showFlippedCapture()

    // get new data from tracker
    let features = tracker.getCurrentPosition()

    // sometimes the tracker doesn't capture anything
    // in that case, we want to stop the function right here using 'return'
    if (features.length == 0) {
        return
      }

      // how to get the numbers visable or not
   // for (let feature of features) {
   //     stroke(255)
   //     fill(255)
   //     circle(feature.x, feature.y, 4)
   //     text(feature.label, feature.x, feature.y)
   //   }


        for ( let heart of hearts) {
        noStroke()
          fill(heart.color)
          // circle(heart.x,heart.y,40)
          quad(heart.x, heart.y,heart.x-25, heart.y+25,heart.x, heart.y+50,heart.x+25, heart.y+25);
         arc(heart.x-12, heart.y+13, 35, 35, PI - QUARTER_PI, 0);
         arc(heart.x+13, heart.y+13, 35, 35, PI - QUARTER_PI, QUARTER_PI);


      heart.x += heart.vx
      heart.y += heart.vy


          if (heart.x>=600) {
            heart.vx=-heart.vx
          }

          if(heart.x<=200) {
            heart.vx=-heart.vx
          }

          if(heart.y>=50) {
            heart.vy=-heart.vy
          }

          if(heart.y<=75) {
            heart.vy=-heart.vy
          }
      }


fill(120, 5, 18)
   circle(features[62].x, features[62].y,45)
fill(140, 45, 56)
   circle(features[2].x-20, features[2].y-15,25)
   circle(features[12].x+20, features[12].y-15,25)
//nose and cheeks



strokeWeight(1)
stroke(120, 5, 18)
          fill(250)
          triangle(features[21].x, features[21].y,features[19].x, features[19].y,features[20].x, features[20].y-50)

          triangle(features[15].x, features[15].y,features[17].x, features[17].y,features[16].x, features[16].y-50)

          triangle(features[28].x, features[28].y+45,features[30].x, features[30].y+45,features[29].x, features[29].y+95)

          triangle(features[25].x, features[25].y+45,features[23].x, features[23].y+45,features[24].x, features[24].y+95)

        noStroke()
          fill(232, 216, 223)
          triangle(features[14].x, features[14].y+5,features[13].x-20, features[13].y-5,features[28].x-10, features[28].y)
          triangle(features[1].x, features[1].y-5,features[0].x, features[0].y+5,features[23].x+10, features[23].y)

          strokeWeight(1)
          stroke(217, 163, 175)
          circle (features[24].x, features[24].y+105,8)
          circle (features[29].x, features[29].y+105,8)
          circle(features[20].x, features[20].y-60,8)
          circle(features[16].x, features[16].y-60,8)
          //clown decalls - last 3 since noStroke

          noStroke()
          fill(217, 163, 175)
          quad(features[29].x, features[29].y,features[29].x-25, features[29].y+25,features[29].x, features[29].y+50,features[29].x+25, features[29].y+25);
          arc(features[29].x-12, features[29].y+13, 35, 35, PI - QUARTER_PI, 0);
          arc(features[29].x+13, features[29].y+13, 35, 35, PI - QUARTER_PI, QUARTER_PI);

          quad(features[24].x, features[24].y,features[24].x-25, features[24].y+25,features[24].x, features[24].y+50,features[24].x+25, features[24].y+25);
          arc(features[24].x-12, features[24].y+13, 35, 35, PI - QUARTER_PI, 0);
          arc(features[24].x+13, features[24].y+13, 35, 35, PI - QUARTER_PI, QUARTER_PI);

          //heart eyes +



  fill(212, 129, 160)
       circle(features[46].x, features[46].y+3,6)
       circle(features[47].x, features[47].y+3,6)
       circle(features[48].x, features[48].y+3,6)
       circle(features[49].x, features[49].y+3,6)
       circle(features[50].x, features[50].y+3,6)
       circle(features[51].x, features[51].y-2,6)
       circle(features[52].x, features[52].y-2,6)
       circle(features[53].x, features[53].y-2,6)
       circle(features[54].x, features[54].y-2,6)
       circle(features[55].x, features[55].y-2,6)
       circle(features[44].x, features[44].y+3,6)
       circle(features[45].x, features[45].y+3,6)
       // lip outline


       beginShape()
    fill(166, 96, 104)
	vertex(features[57].x, features[57].y);
	bezierVertex(features[57].x,features[57].y-10,features[57].x+12,features[57].y-14,features[57].x+12,features[57].y-18);
	bezierVertex(features[57].x+12,features[57].y-22,features[57].x+4,features[57].y-26,features[57].x,features[57].y-10.8);
	bezierVertex(features[57].x-4,features[57].y-26,features[57].x-12,features[57].y-22,features[57].x-12,features[57].y-18);
	bezierVertex(features[57].x-12,features[57].y-14,features[57].x,features[57].y-10,features[57].x,features[57].y);
  endShape()
       //inner lip heart



    }

// this function flips the webcam and displays it
function showFlippedCapture() {
    push()
    translate(capture.width, 0)
    scale(-1, 1)
    image(capture, 0, 0, capture.width, capture.height)
    pop()
}
