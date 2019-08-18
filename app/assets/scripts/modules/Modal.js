

class Modal {
    constructor() {
        let cv = document.getElementById("CV");
        let contact = document.getElementById("Contact");

        let cv_link = document.getElementById("CV_link");
        let contact_link = document.getElementById("Contact_link");

        let close = document.getElementById("close");




        cv_link.addEventListener("click", function () {
            cv.classList.toggle("section--show");


        }, false);
        close.addEventListener("click", function() {
            cv.classList.remove("section--show")
            console.log(cv);
        }, false);
    }

}

export default Modal;
