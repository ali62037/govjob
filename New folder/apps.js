let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
let sidse = document.getElementsByClassName("side");
let s = document.getElementById("side");
console.log(s);

menu.addEventListener("click", function(){
    s.style.display = "inline"
    cross.style.display = "inline"
    menu.style.display = 'none'
    
})


cross.addEventListener("click", ()=>{
    s.style.display ="none"
    cross.style.display = "none"
    menu.style.display = "inline"
})