import { swap } from "./swap.js";

export async function mergeSort() {
    let bars = document.querySelectorAll(".bar");
    await mergeSortHelper(bars, 0, bars.length - 1);
}

async function mergeSortHelper(bars, start, end) {
    if (start >= end) {
        return;
    }
    let mid = Math.floor((start + end) / 2);
    await mergeSortHelper(bars, start, mid);
    await mergeSortHelper(bars, mid + 1, end);
    await merge(bars, start, mid, end);
}

async function merge(bars, start, mid, end) {
    let i = start, j = mid + 1;
    let temp = [];
    while (i <= mid && j <= end) {
        bars[i].style.backgroundColor = "#FF4949";
        bars[j].style.backgroundColor = "#FF4949";
        await new Promise(resolve => setTimeout(() => { resolve() }));
        if (bars[i].clientHeight < bars[j].clientHeight) {
            temp.push(bars[i].clientHeight);
            bars[i].style.backgroundColor = "yellow";
            i++;
        } else {
            temp.push(bars[j].clientHeight);
            bars[j].style.backgroundColor = "yellow";
            j++;
        }
    }
    while (i <= mid) {
        bars[i].style.backgroundColor = "#FF4949";
        await new Promise(resolve => setTimeout(() => { resolve() }));
        temp.push(bars[i].clientHeight);
        bars[i].style.backgroundColor = "yellow";
        i++;
    }
    while (j <= end) {
        bars[j].style.backgroundColor = "#FF4949";
        await new Promise(resolve => setTimeout(() => { resolve() }));
        temp.push(bars[j].clientHeight);
        bars[j].style.backgroundColor = "yellow";
        j++;
    }
    for (let i = start, j = 0; i <= end; ++i, ++j) {
        bars[i].style.backgroundColor = "#13CE66";
        bars[i].style.height = `${temp[j]}px`;
    }
}
