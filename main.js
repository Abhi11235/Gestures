Webcam.set({
width:350,
height:300,
image_fromat:'png',
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
});

}

console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/21EbdApT-/model.json',modelLoaded);

function modelLoaded()
    {
console.log('modelLoaded');
    }

function speak() 
{
var synth = window.speechSynthesis;
speak_data_1="The first prediction is" + prediction_1;
speak_data_2="The second prediction is" + prediction_2;
var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
synth.speak(utterThis);
}
function check()
{

    img=document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results) 
{
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("emotion_name").innerHTML=results[0].label;
        document.getElementById("emotion_name2").innerHTML=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    speak();
    if(results[0].label=="Thumbs up")
    {
     document.getElementById("update_emoji").innerHTML= 
     "&#128077;";
    }
    if(results[0].label=="Peace")
    {
     document.getElementById("update_emoji").innerHTML= 
     "&#9996;";
    }
    
    if(results[0].label=="Thumbs down")
    {
     document.getElementById("update_emoji").innerHTML= 
    "&#128078;";
    }
    if(results[0].label=="Rock")
    {
     document.getElementById("update_emoji2").innerHTML= 
     "&#129304;";
    }


    
    if(results[0].label=="Thumbs up")
    {
     document.getElementById("update_emoji2").innerHTML= 
     "&#128077;";
    }
    if(results[0].label=="Peace")
    {
     "&#9996;";
    }
    {
     document.getElementById("update_emoji2").innerHTML= 
     "&#128546;";
    }
    
    if(results[0].label=="Thumbs down")
    {
     document.getElementById("update_emoji2").innerHTML= 
     "&#128078;";
    }
    if(results[0].label=="Rock")
    {
     document.getElementById("update_emoji2").innerHTML= 
     "&#129304;";
    }

    
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    