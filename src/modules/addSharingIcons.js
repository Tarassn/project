export default function addSharingIcons() {

    let a2a_config = a2a_config || {};
    a2a_config.num_services = 6;

    function downloadJSAtOnload() {
        let element = document.createElement("script");
        element.src = "https://static.addtoany.com/menu/page.js";
        document.body.appendChild(element);
    }

    window.addEventListener("load", downloadJSAtOnload, false);
}