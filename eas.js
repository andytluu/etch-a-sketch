let parent = document.querySelector("body");

for(let i = 0; i<256; i++){
    let div = document.createElement("div");
    div.textContent = i.toString();
    div.classList.toggle("hover");
    parent.appendChild(div);
}

function changeColor(target){
    target.style.backgroundColor = "red";
}
let hover = document.querySelectorAll(".hover");

hover.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.style.backgroundColor = "red";
    })
})

hover.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "blue";
    })
})