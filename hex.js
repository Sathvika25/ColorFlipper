const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const text = document.getElementById("color");
const btn = document.getElementById("click-btn");
btn.addEventListener("click",function(){
        let value = "#";
        for(let i=0;i<6;i++){
        value+= colors[getRandomNumber()]
    }
      document.body.style.backgroundColor = value;
      text.textContent = value; 
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}