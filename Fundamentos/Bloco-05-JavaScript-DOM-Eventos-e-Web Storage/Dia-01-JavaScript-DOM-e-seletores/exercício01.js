document.getElementById("page-title").innerText = "Apreendendo DOM";
document.getElementsByClassName("paragraph")[0].style.fontStyle = "italic"

let paragrafo = document.getElementsByClassName("paragraph")
for (let i = 0; i < paragrafo.length; i += 1) {
   paragrafo[i].style.color = "red";
    
}

document.querySelector("#query").style.color = "Blue"
document.querySelectorAll("h4")[0].style.color = "green"