let parent = document.querySelector("#container");
let button = document.querySelector("button");

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


button.addEventListener("click", function(){
    let grid = prompt("How many squares per side?");
    if(grid > 101){
        grid = prompt("Enter a number less than 100?");
    }
    console.log(grid);
});