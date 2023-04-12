import { swap } from "./swap.js";

export async function insertionSort() {
    let bars = document.querySelectorAll(".bar");
    for (let i = 1; i < bars.length; ++i) {
        
        let it = i;
        while(it > 0 && bars[it].clientHeight < bars[it-1].clientHeight){
            bars[it].style.backgroundColor = "#FF4949";
            bars[it-1].style.backgroundColor = "#FF4949";
            await new Promise(resolve => setTimeout(() => { resolve() }));
            swap(bars[it], bars[it-1]);
            bars[it].style.backgroundColor = "#13CE66";
            bars[it-1].style.backgroundColor = "#13CE66";
            it--;
        }
        

    }

}