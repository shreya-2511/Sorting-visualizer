export function getSpeed() {
    const speedBtn = document.getElementById("speed");
    return 1000 / parseFloat(speedBtn.value);
}

export function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const height1 = style1.getPropertyValue("height");
    const height2 = style2.getPropertyValue("height");

    el1.style.height = height2;
    el2.style.height = height1;
}

const bars = document.getElementById("bars");
const numSizeInput = document.getElementById("numSize");

numSizeInput.addEventListener("input", generateBars);
document.getElementById("new-array").addEventListener("click",generateBars);

 function generateBars(){
    const numSize = parseInt(numSizeInput.value);
    bars.innerHTML = ""; 
    const array=[];
    for(let i=0; i<numSize; i++) {
        array[i] = Math.floor(Math.random() * 100);

        const barElement = document.createElement("div");
        barElement.classList.add("bar");
        barElement.style.height = array[i]*3 + "px";
        bars.appendChild(barElement);
    }
 }
 generateBars();
