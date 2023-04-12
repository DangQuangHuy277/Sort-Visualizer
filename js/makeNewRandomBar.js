export function makeNewRandomBar(){

    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar) => bar.remove());


    const container = document.querySelector(".bar-container");
    for (let i = 0; i < 100; ++i) {
        let num = Math.floor(Math.random() * 100);
        const ele = document.createElement("span");
        ele.style.height = `${num * 5}px`;
        ele.classList.add("bar");
        container.appendChild(ele);
    }
}