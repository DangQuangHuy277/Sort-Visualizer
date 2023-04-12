import { swap } from "./swap.js";

export async function quickSort() {
    let bars = document.querySelectorAll(".bar");
    await quickSortHelper(bars, 0, bars.length - 1);
}

async function quickSortHelper(bars, start, end) {
    if (start > end) {
        return;
    }
    let pivot = await partition(bars, start, end);
    await quickSortHelper(bars, start, pivot - 1);
    await quickSortHelper(bars, pivot + 1, end);
}

async function partition(bars, start, end) {
    let pivot = bars[end].clientHeight;
    let i = start - 1;
    for (let j = start; j < end; ++j) {
        bars[j].style.backgroundColor = "#FF4949";
        await new Promise(resolve => setTimeout(() => { resolve() }));
        if (bars[j].clientHeight < pivot) {
            i++;
            bars[i].style.backgroundColor = "#FF4949";
            await new Promise(resolve => setTimeout(() => { resolve() }));
            swap(bars[i], bars[j]);
            bars[i].style.backgroundColor = "#13CE66";
        }
        bars[j].style.backgroundColor = "yellow";
    }
    i++;
    bars[i].style.backgroundColor = "#FF4949";
    await new Promise(resolve => setTimeout(() => { resolve() }));
    swap(bars[i], bars[end]);
    bars[i].style.backgroundColor = "#13CE66";
    return i;
}