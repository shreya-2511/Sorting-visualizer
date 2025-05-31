import { getSpeed, swap } from './sorting.js';

document.getElementById("insertionSortBtn").addEventListener("click", insertionSort);

async function insertionSort() {
    const bars = document.querySelectorAll(".bar");
    const n= bars.length;
    for (var i = 1; i < n; i++) {
        let j = i - 1;
        bars[i].style.background = "blue";

        const speed = getSpeed();
        await new Promise(resolve => setTimeout(resolve,speed));


        while (j >= 0) {
        const height1 = parseInt(bars[j].style.height);
        const height2 = parseInt(bars[j+1].style.height);            
            if(height1 > height2){
                bars[j].style.background = "red";
                bars[j + 1].style.background = "red";

                swap(bars[j], bars[j + 1]);

                await new Promise(resolve => setTimeout(resolve, speed));

                bars[j].style.background = "yellow";
                bars[j + 1].style.background = "yellow";                
            } else break;

            j--;
        }

        for (let k = 0; k <= i; k++) {
            bars[k].style.background = "green";
        }
    }
}
