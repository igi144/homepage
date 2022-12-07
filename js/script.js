{
    const button__logo = document.querySelector(".button__logo");
    const header = document.querySelector(".header")
    const button = document.querySelector(".button__background");
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName")

    button__logo.addEventListener("click", () => {
        header.remove();
    });

    const toggleBackgroundColor = () => {

        body.classList.toggle("dark");

        themeName.innerText = body.classList.contains("dark") ? "jasny" : "kolorowy";
    }

    button.addEventListener("click", toggleBackgroundColor);
}

