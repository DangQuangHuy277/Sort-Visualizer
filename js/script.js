import { makeNewRandomBar } from "./makeNewRandomBar.js";
import { bubbleSort } from "./bubble.js";
import { insertionSort } from "./insertion.js";
import { selectionSort } from "./selection.js";
import { mergeSort } from "./merge.js";
import { quickSort } from "./quick.js";





// function makeNewRandomBar() {

//     const bars = document.querySelectorAll(".bar");
//     bars.forEach((bar) => bar.remove());


//     const container = document.querySelector(".bar-container");
//     for (let i = 0; i < 100; ++i) {
//         let num = Math.floor(Math.random() * 100);
//         const ele = document.createElement("span");
//         ele.style.height = `${num * 5}px`;
//         ele.classList.add("bar");
//         container.appendChild(ele);
//     }
// }

console.log("Hello World");

document.querySelector(".new-array").addEventListener('click', makeNewRandomBar);

document.querySelector(".bubble-sort").addEventListener('click', bubbleSort);
document.querySelector(".insertion-sort").addEventListener('click', insertionSort);
document.querySelector(".selection-sort").addEventListener('click', selectionSort);
document.querySelector(".merge-sort").addEventListener('click', mergeSort);
document.querySelector(".quick-sort").addEventListener('click', quickSort);



