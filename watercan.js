var img2 = "";
var status_2 = "";
objects = [];

function setup(){
    canvas = createCanvas(700,700);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function preload(){
    img2 = loadImage('watercan.jpeg');
    console.log ('image is loaded');
}

function draw(){
    image(img2,0,0,700,700);
    if(status_2 != "" ){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill('#FF0000');
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " "+ percent +"%", objects[i].x,objects[i].y);
            noFill();
            stroke('#FF0000');
            rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelloaded(){
    console.log("MODEL IS LOADED");
    status_2 = true;
    objectDetector.detect(img2,gotResults);
}

function gotResults(error,results){
    if(error){
       console.log(error);
   }
   objects = results;
   console.log(results);
   document.getElementById("howmany").innerHTML = "There are " + objects.length + " object detected in the image.";
}