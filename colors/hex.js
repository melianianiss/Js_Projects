// Array of color names
const A = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById('btn')
const color=document.querySelector(".color")

btn.addEventListener('click',function(){
    let Hc="#"
     for(i=0;i<6;i++){
        Hc+=A[getRandomNumber()]
     }

     color.textContent=Hc
     document.body.style.backgroundColor=Hc
// color.textContent=colorNames[randomNumber]    
})


function getRandomNumber(){
  return Math.floor(Math.random()*A.length);
}