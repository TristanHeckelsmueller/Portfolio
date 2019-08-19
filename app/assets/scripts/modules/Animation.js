
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

    }
}

export default Animation;
