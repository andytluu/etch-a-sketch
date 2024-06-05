let parent = document.querySelector("body");

for(let i = 0; i<256; i++){
    let div = document.createElement("div");
    div.textContent = i.toString();
    parent.appendChild(div);
}