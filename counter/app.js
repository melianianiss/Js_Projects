const btns=document.querySelectorAll('.btn')
const val=document.getElementById('value')
let counter=0
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
       const classes= e.target.classList
       if(classes.contains('decrease')){
         counter --  
       }else if(classes.contains('increase')){
        counter ++
       }else{
        counter=0
       }
       if(counter<0){
        val.style.color="red"
       }else if(counter>0){
        val.style.color="green"
       }else{
        val.style.color="blue"
       }
       val.textContent=counter
      
    });
});