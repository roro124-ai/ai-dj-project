yummy="";
rapstar="";


function preload(){
    song=loadSound("rapstar.mp3");
    song=loadSound("yummy.mp3");
    
}
function play(){

}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
 video.hide();
    }

    function draw(){
        image(video ,0,0,600,400)
        
    }