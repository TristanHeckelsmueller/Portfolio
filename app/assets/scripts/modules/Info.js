

class Info {
    constructor() {
        let info_icon = document.getElementsByClassName("info");

        let sem = document.getElementById("sem");
        let js = document.getElementById("js");
        let wp = document.getElementById("wp");
        let other = document.getElementById("other");

        info_icon[0].addEventListener("mouseover", function () {
            sem.classList.add("info--show");
            console.log("Open")
        });
        info_icon[0].addEventListener("mouseout", function () {
            sem.classList.remove("info--show");
        });
        info_icon[1].addEventListener("mouseover", function () {
            js.classList.add("info--show");
        });
        info_icon[1].addEventListener("mouseout", function () {
            js.classList.remove("info--show");
        });
        info_icon[2].addEventListener("mouseover", function () {
            wp.classList.add("info--show");
        });
        info_icon[2].addEventListener("mouseout", function () {
            wp.classList.remove("info--show");
        });
        info_icon[3].addEventListener("mouseover", function () {
            other.classList.add("info--show");
        });
        info_icon[3].addEventListener("mouseout", function () {
            other.classList.remove("info--show");
        });
   
    }

}

export default Info;
