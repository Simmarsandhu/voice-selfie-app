var Speechrecognition = window.webkitSpeechRecognition;
var recognition = new Speechrecognition();

function start_btn(){
    document.getElementById("text_box").innerHTML = "";
    recognition.start();

}

recognition.onresult= function(event){
    console.log(event);

    var result =event.results[0][0].transcript;
    console.log(result);
    document.getElementById("text_box").innerHTML = result;

    if(result =="take my selfie"){
        console.log("Simmar");
        speak();
    }
    else if(result != "take my selfie")
    {
        window.alert("please speak 'Take my selfie'");
    }
    
}
function speak(){
    var web=window.speechSynthesis;
     txt= "taking your selfie in 5 seconds";
    var utter= new SpeechSynthesisUtterance(txt);
    
    web.speak(utter);
    Webcam.attach(web_cam);

    setTimeout(
         function(){ snap_shot(); save();} , 5000); 
    

}

web_cam= document.getElementById("web_cam");
Webcam.set({
    width:500,
    height:400,
    image_format:'jpeg',
    jpeg_quality:90
});

 function snap_shot(){
  Webcam.snap(
      function(pic){
          document.getElementById("selfie_div").innerHTML='<img id="selfie_2" src="'+pic+'"/>';
      }
  );

  }
function save(){
    link= document.getElementById("link");
    image=document.getElementById("selfie_2").src;
    link.href=image;
    link.click();
}