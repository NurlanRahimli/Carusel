let mySlider = [
  "img/js.jpg",
  "img/js1.jpg",
  "img/world.png"

]


let img = document.querySelector("#slider img");
let index = 0;
img.src = mySlider[index];



let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function() {
  index++;
  if(index>mySlider.length - 1){
    index = 0
  }
  img.src = mySlider[index];
})


prev.addEventListener("click", function(){
  index--;
  if(index== -1 ){
    index= mySlider.length-1;
  }
  img.src = mySlider[index];
})









// const slide = document.querySelector(".slider");
// const btn1 = document.querySelector(".btn1");
// const btn2 = document.querySelector(".btn2");
// const btn3 = document.querySelector(".btn3");
// btn1.onclick = function () {
//   slide.style.transform = "translateX(0px)";
// };
// btn2.onclick = function () {
//   slide.style.transform = "translateX(-100%)";
// };
// btn3.onclick = function () {
//   slide.style.transform = "translateX(-200%)";
// };






// let btn = document.querySelector("#btn")


// btn.addEventListener("click", function() {
//     let value = document.getElementById("text").value;
//     let speech = new SpeechSynthesisUtterance(value);
//     speech.volume=10;
//     speech.rate = 0.8;
//     speech.pitch = 0.1;
//     window.speechSynthesis.speak(speech)
// })






