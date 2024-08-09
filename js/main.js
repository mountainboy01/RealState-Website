/*************************NAVBAR**************************/
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggleIcon");

toggleIcon.addEventListener("click",()=>{
   nav.classList.toggle("active");
   toggleIcon.classList.toggle("fa-xmark");
});
/*************************NAVBAR**************************/


/***************************** SCROLL TOP JS **********************************/
const scrollTop = document.querySelector("#scrollTop");
window.addEventListener("scroll",()=>{
	if(window.pageYOffset>300){
	scrollTop.classList.add("active");
     }

     else{
     	scrollTop.classList.remove("active");
     }
})

scrollTop.addEventListener("click",()=>{
	window.scrollTo(0 ,0);
})


/***************************** SCROLL TOP JS **********************************/