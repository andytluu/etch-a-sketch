let parent = document.querySelector("#container");
let button = document.querySelector("button");


for(let i = 0; i<256; i++){

    let div = document.createElement("div");
    div.textContent = i.toString();
    div.classList.toggle("hover"); 
    parent.appendChild(div);
    
}

button.addEventListener("click",function(){
    let grid = prompt("How many squares?");
    if(grid >= 101){
        grid = prompt("Enter less than 100");
    }
    parent.replaceChildren();
    for(let i = 0;i < (grid * grid); i++){
        let div = document.createElement("div");
        div.textContent = i.toString();
        div.classList.toggle("hover"); 
        parent.appendChild(div);

        div.addEventListener("mouseenter", function(){
            div.style.backgroundColor = "red";
        });

        div.addEventListener("mouseleave", function(){
            div.style.backgroundColor = "blue";
        })
    }

    
});

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