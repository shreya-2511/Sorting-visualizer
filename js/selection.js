import { getSpeed,swap } from './sorting.js';

document.getElementById("selectionSortBtn").addEventListener("click", selectionSort);

async function selectionSort() {
    const bars = document.querySelectorAll(".bar");
    const n= bars.length;
    for (var i = 0; i < n-1; i++) {     
        let min_idx = i;
        bars[i].style.background = "blue";
        for (let j = i + 1; j < n; j++) {

                bars[j].style.background = "red";
                
                const speed = getSpeed();
                await new Promise(resolve => setTimeout(resolve, speed));


            const height1 = parseInt(bars[j].style.height);
            const height2 = parseInt(bars[min_idx].style.height);
            if (height1 < height2) {
                min_idx = j;
            }
            bars[j].style.background = "yellow";
                
        }
        if (min_idx !== i) {
            swap(bars[i], bars[min_idx]);
        }
        bars[i].style.background = "green";
    }
    bars[n - 1].style.background = "green";
}
