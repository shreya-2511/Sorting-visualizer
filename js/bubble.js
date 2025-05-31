import { getSpeed, swap } from './sorting.js';

document.getElementById("bubbleSortBtn").addEventListener("click", bubbleSort);

async function bubbleSort() {
    const bars = document.querySelectorAll(".bar");
    const n= bars.length;
    for (var i = 0; i < n-1; i++) { 
            for (var j = 0; j < n - i - 1; j++) {

                bars[j].style.background = "red";
                bars[j + 1].style.background = "red";

                const speed = getSpeed();
                await new Promise(resolve => setTimeout(resolve, speed));


            const height1 = parseInt(bars[j].style.height);
            const height2 = parseInt(bars[j + 1].style.height);

            // Compare and swap if needed
            if (height1 > height2) {
                swap(bars[j], bars[j + 1]);
            }

                bars[j].style.background = "yellow";
                bars[j + 1].style.background = "yellow";
        }
        bars[n - i - 1].style.background = "green";
    }
    bars[0].style.background = "green";
}
