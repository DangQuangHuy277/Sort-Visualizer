import { swap } from "./swap.js";

export async function selectionSort() {
    let bars = document.querySelectorAll(".bar");
    for (let i = 0; i < bars.length; ++i) {
        let min = i;
        for (let j = i + 1; j < bars.length; ++j) {
            bars[j].style.backgroundColor = "#FF4949";
            bars[min].style.backgroundColor = "#FF4949";
            await new Promise(resolve => setTimeout(() => { resolve() }));
            if (bars[j].clientHeight < bars[min].clientHeight) {
                bars[min].style.backgroundColor = "yellow";
                min = j;
            }
            bars[j].style.backgroundColor = "yellow";
        }
        swap(bars[i], bars[min]);
        bars[i].style.backgroundColor = "#13CE66";
    }
}