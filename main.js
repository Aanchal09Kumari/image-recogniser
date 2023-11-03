Webcam.set({
    width :350,
    height:300,
    image_format:"png",
    png_quality:90
});
var camera=document.getElementById("cam");
Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Photo").innerHTML="<img id='hello' src='"+data_uri+"'>";
    });
}
console.log(ml5.version);
var model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JGY3GeLmh/model.json",modelLoaded);

function modelLoaded(){
    console.log("model has loaded");
}

function compare(){
    var imge=document.getElementById("hello");
    model.classify(imge,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("NameO").innerHTML=result[0].label;
        document.getElementById("accu").innerHTML=result[0].confidence;
    }
}