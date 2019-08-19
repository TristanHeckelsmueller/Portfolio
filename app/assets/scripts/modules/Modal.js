

class Modal {
    constructor() {
        let cv = document.getElementById("CV");
        let contact = document.getElementById("Contact");

        let cv_link = document.getElementById("CV_link");
        let contact_link = document.getElementById("Contact_link");
        
        let close = document.getElementById("close");

        let con_close = document.getElementById("contact_close");

        contact_link.addEventListener("click", function () {
            contact.classList.toggle("section--show");
        }, false);
        cv_link.addEventListener("click", function () {
            cv.classList.toggle("section--show");


        }, false);

        close.addEventListener("click", function() {
            cv.classList.remove("section--show");
        }, false);
        con_close.addEventListener("click", function() {
            contact.classList.remove("section--show");
        }, false);
    }

}

export default Modal;
