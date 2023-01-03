Status = "";
bedroom_image = "";

function preload(){
    bedroom_image = loadImage("bed room.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(320,200);
    ObjectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = " Status : Detecting Objects ";
}

function modelLoaded(){
      console.log("model Has Loaded ");
      Status = true;
      object_detector.Detect(bedroom_image,gotResults);
}

function gotResults(results,error){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(bedroom_image,0,0,640,350);
}