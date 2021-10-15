img="";
objectstatus="";
function preload(){
    img=loadImage("living.jfif");
}
function setup(){
    createCanvas(500,500);
}
function draw(){
    image(img,0,0,500,500);
}