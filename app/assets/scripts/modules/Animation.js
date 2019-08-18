
class Animation {
    constructor() {
        console.log("Load Animations");
        let caption = document.getElementById("title");
        let wrapper = document.getElementById("title-wrapper");
        wrapper.addEventListener('mouseover', mouseOver);
        wrapper.addEventListener('mouseout', mouseOut);
        function mouseOver() {
            let id = document.getElementById("Info1");
            let wrapper = document.getElementById("title-wrapper");
            wrapper.classList.add("title-wwrapper--open");
            wrapper.classList.remove("title-wwrapper");
            id.classList.add("tool-tip--open");

        }
        
        function mouseOut() {
            let wrapper = document.getElementById("title-wrapper");
            let id = document.getElementById("Info1");
            id.classList.remove("tool-tip--open");
            wrapper.classList.add("title-wwrapper");
            wrapper.classList.remove("title-wwrapper--open");

        }

        let hamburger = document.getElementById("hamburger");
        let hamburger_center = document.getElementById("hamburger--center");
        let menu = document.getElementById("menu");
        hamburger.addEventListener('mouseover', hamOver);
        hamburger.addEventListener('mouseout', hamOut);
        hamburger.addEventListener('click', hamClick);
        function hamOver() {
            hamburger_center.classList.add("hamburger--hover");
        }
        function hamOut(){
            hamburger_center.classList.remove("hamburger--hover");
        }
        function hamClick() {
            menu.classList.toggle("menu--open");
            hamburger_center.classList.toggle("hamburger--center--white");
            hamburger.classList.toggle("hamburger--white");
            
        }
    }
}

export default Animation;
