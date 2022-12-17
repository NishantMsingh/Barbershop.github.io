let bar=document.getElementById("bar");
let navbar=document.getElementById("navbar");

bar.addEventListener('click',()=>{
    navbar.classList.toggle("nv-height");
});

function fun(){
    navbar.classList.toggle("nv-height");  
}