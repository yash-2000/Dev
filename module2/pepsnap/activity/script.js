let videoElement = document.querySelector("video");

let constarint = {video: true};
navigator.mediaDevices.getUserMedia(constarint).then(function(mediastrem){
    videoElement.srcObject = mediastrem;
})
.catch(function(erroe){
    console.log(error);
});