const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-dialog");
const close = menu.querySelector(".close");

function toggle(state) {
    burger.toggleAttribute("close", state);
    menu.toggleAttribute("open", state);
    document.body.style.overflow = state ? "hidden" : "auto";
}
menu.addEventListener("click", (event) => {
    if (event.target.tagName == "A") toggle(false);
});
close.addEventListener("click", () => {
    toggle(false);
});
burger.addEventListener("click", () => {
    toggle(true);
});