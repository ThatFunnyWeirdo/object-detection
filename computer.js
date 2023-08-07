statuss = "";
function setup()
{
    canvas = createCanvas(400, 320);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_head").innerHTML = "Status: Detecting Objects";
}

function preload()
{
    img = loadImage("computer.jpeg");
}


function modelLoaded()
{
    console.log("Model Loaded!!");
    statuss = true;
    objectDetector.detect(img, gotPoses);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }

    console.log(results);
}

function back()
{
    window.location = "index.html";
}