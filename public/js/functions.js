/*** Initializa tooltip:
 * Displays information when the mouse is positioned on a button
 * ***/
//const $ = require("jquery")

$(function () {

    $("body").tooltip({
        selector: "[data-bs-toggle=\"tooltip\"]",
        container: "body",
        placement: "bottom"
    })
})

function mouseover(text) {
    /*** Enables and disables the tooltip when the text box is filled.* ***/
    console.log(text)
    if (text.value.trim() !== "") {
        //$(text).tooltip("hide")
        //text.setAttribute("[data-bs-toggle='tooltip']", "tooltip('hide')")
        $("[data-bs-toggle='tooltip']").tooltip("hide")
        text.removeAttribute("data-bs-original-title")
        text.removeAttribute("data-bs-toggle")
        text.removeAttribute("data-bs-placement")

    } else {
        text.setAttribute("data-bs-original-title", "Fill in this box")
        text.setAttribute("data-bs-toggle", "tooltip")
        text.setAttribute("data-bs-placement", "bottom")
        $("[data-bs-toggle='tooltip']").tooltip("show")
        //text.setAttribute("[data-bs-toggle='tooltip']", "tooltip('show')")
        //$(text).tooltip("show")


    }
}
