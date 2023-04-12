export function swap(ele1, ele2) {
    const style1 = window.getComputedStyle(ele1);
    const style2 = window.getComputedStyle(ele2);
    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");
    ele1.style.height = transform2;
    ele2.style.height = transform1;
}
