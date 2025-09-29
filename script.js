const btn = document.querySelector("#btn")
const coin = document.getElementById("coinImage")
coin.addEventListener('click', ()=>coinflip())
btn.addEventListener('click', ()=>coinflip())

function coinflip() {
    const label = document.getElementById('label')
    const img = document.getElementById('coinImage')
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    result === "Heads" ? img.src = "/resources/heads.svg" : img.src = "/resources/tails.svg"
    
    if(img.classList.contains("rotate")){
        img.classList.remove("rotate")
    }
    else{
        img.classList.add("rotate")
    }
    
    label.innerHTML = result
}

