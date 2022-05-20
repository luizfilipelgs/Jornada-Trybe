document.getElementById("header-container").style.backgroundColor = "green"

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "red"
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow"

document.getElementsByClassName("urgente")[0].style.backgroundColor = "black"
document.getElementsByClassName("urgente")[1].style.backgroundColor = "black"

document.querySelectorAll(".naoUrgente")[0].style.backgroundColor = "green"
document.querySelectorAll(".naoUrgente")[1].style.backgroundColor = "green"

let h3 = document.getElementsByTagName("h3")
for (let index = 0; index < h3.length; index++) {
    h3[index].style.color = "pink"
}
//document.querySelectorAll("h3").style.color = "blue"

//document.getElementById("footer-container").style.backgroundColor = "black"
document.querySelector("#footer-container").style.backgroundColor = "black"