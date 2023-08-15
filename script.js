document.body.style.transition = "box-shadow 0.2s";

function updateBorder() {
    const minWidth = 1130;
    const maxWidth = 1715;
    const currentWidth = window.innerWidth;

    if (currentWidth < minWidth || currentWidth > maxWidth) {
        document.body.style.boxShadow = "inset 0 0 10px 10px red";
    } else {
        document.body.style.boxShadow = "inset 0 0 10px 10px transparent";
    }
}
updateBorder();

window.addEventListener("resize", updateBorder);