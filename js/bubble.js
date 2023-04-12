import { swap } from "./swap.js";
export async function bubbleSort() {
    let bars = document.querySelectorAll(".bar");

    for (let i = 1; i <= bars.length; ++i) {
        let flag = false;

        for (let j = 0; j < bars.length - i; ++j) {
            if (bars[j].clientHeight > bars[j + 1].clientHeight) {
                bars[j].style.backgroundColor = "#FF4949";
                bars[j + 1].style.backgroundColor = "#FF4949";
                flag = true;
                await new Promise(resolve => setTimeout(() => { resolve() }));
                swap(bars[j], bars[j + 1]);
                bars[j].style.backgroundColor = "yellow";
                bars[j + 1].style.backgroundColor = "yellow";
            }
        }
        if (flag === false) {
            for (let j = 0; j <= bars.length - i; ++j) {
                bars[j].style.backgroundColor = "#13CE66";
            }
            break;
        }
        bars[bars.length - i].style.backgroundColor = "#13CE66";

    }
    bars[0].style.backgroundColor = "#13CE66";
}

