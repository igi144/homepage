{
    const toggleBackgroundColor = () => {

        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");

        body.classList.toggle("dark");

        themeName.innerText = body.classList.contains("dark") ? "jasny" : "kolorowy";
    }

    const init = () => {
        const buttonLogo = document.querySelector(".button__logo");
        const header = document.querySelector(".header")
        const button = document.querySelector(".button__background");

        button.addEventListener("click", toggleBackgroundColor);

        buttonLogo.addEventListener("click", () => {
            header.remove();
        })
    };
    init();
}

