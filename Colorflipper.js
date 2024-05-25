const array = ["red","blue","green","yellow","white","orange"]
const btn = document.getElementById("click-btn");
const color  = document.getElementById("color");
btn.addEventListener("click",function(){
   let randomNumber = getRandomNumber();
   document.body.style.backgroundColor = array[randomNumber];
   color.textContent = `${array[randomNumber]}`

})
function getRandomNumber(){
    let random = Math.floor(Math.random() * array.length);
    return random;
}
