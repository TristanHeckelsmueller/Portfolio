

class Menu {
    constructor() {
        let dots = document.getElementById("Dots");
        let menu = document.getElementById("Menu");
        let ClassStatus = 0;
            dots.addEventListener("click", function () {
                menu.classList.toggle("menu--show");
                ClassStatus = 1;
                console.log(ClassStatus);
                console.log(dots);
            });
    }

}

export default Menu;
