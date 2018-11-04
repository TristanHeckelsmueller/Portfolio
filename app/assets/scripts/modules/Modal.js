

class Modal {
    constructor() {

        let main = document.getElementById("Main");
        let about = document.getElementById("About");
        let portfolio = document.getElementById("Portfolio");
        let cv = document.getElementById("CV");
        let skills = document.getElementById("Skills");
        let contact = document.getElementById("Contact");

        let main_link = document.getElementById("Main_link");
        let about_link = document.getElementById("About_link");
        let portfolio_link = document.getElementById("Portfolio_link");
        let cv_link = document.getElementById("CV_link");
        let skills_link = document.getElementById("Skills_link");
        let contact_link = document.getElementById("Contact_link");

        let menu = document.getElementById("Menu");

        let id = 0;



        about_link.addEventListener("click", function () {
            about.classList.toggle("section--show");

            if (id != 1) {
                portfolio.classList.remove("section--show");
                skills.classList.remove("section--show");
                cv.classList.remove("section--show");
                contact.classList.remove("section--show");
            }
            id = 1;
            menu.classList.remove("menu--show");
            console.log("Remove Menu");
            console.log("Remove About");
        }, false);

        portfolio_link.addEventListener("click", function () {
            portfolio.classList.toggle("section--show");

            if (id != 2) {
                about.classList.remove("section--show");
                skills.classList.remove("section--show");
                cv.classList.remove("section--show");
                contact.classList.remove("section--show");
            }
            id = 2;
            menu.classList.remove("menu--show");
            console.log("Remove About");
        }, false);

        cv_link.addEventListener("click", function () {
            cv.classList.toggle("section--show");

            if (id != 3) {
                about.classList.remove("section--show");
                portfolio.classList.remove("section--show");
                skills.classList.remove("section--show");
                contact.classList.remove("section--show");
            }
            id = 3;
            menu.classList.remove("menu--show");
            console.log("Remove About");
        }, false);

        skills_link.addEventListener("click", function () {
            skills.classList.toggle("section--show");

            if (id != 4) {
                about.classList.remove("section--show");
                portfolio.classList.remove("section--show");
                cv.classList.remove("section--show");
                contact.classList.remove("section--show");
            }
            id = 4;
            menu.classList.remove("menu--show");
            console.log("Remove About");
        }, false);

        contact_link.addEventListener("click", function () {
            contact.classList.toggle("section--show");

            if (id != 5) {
                about.classList.remove("section--show");
                portfolio.classList.remove("section--show");
                cv.classList.remove("section--show");
                skills.classList.remove("section--show");
            }
            id = 5;
            menu.classList.remove("menu--show");
            console.log("Remove About");
        }, false);

        main_link.addEventListener("click", function () {

            if (id != 0) {
                about.classList.remove("section--show");
                portfolio.classList.remove("section--show");
                skills.classList.remove("section--show");
                cv.classList.remove("section--show");
                contact.classList.remove("section--show");
            }
            id = 0;
            menu.classList.remove("menu--show");
            console.log("Remove Everything");
        }, false);

    }
}

export default Modal;
