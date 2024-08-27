// Array of color names
const colorNames = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black'];
const btn=document.getElementById('btn')
const color=document.querySelector(".color")

btn.addEventListener('click',function(){
const randomNumber=getRandomNumber()

console.log(randomNumber)
document.body.style.backgroundColor=colorNames[randomNumber]
color.textContent=colorNames[randomNumber]
// color.textContent=colorNames[randomNumber]    
})


function getRandomNumber(){
  return Math.floor(Math.random()*colorNames.length);
}