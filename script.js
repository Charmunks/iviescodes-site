function powerOn() {
    if (document.querySelector(".content").style.visibility === "hidden") {
        document.querySelector(".content").style.visibility = "visible";
        document.querySelector(".about").style.visibility = "visible";
        document.querySelector(".projects").style.visibility = "visible";
        document.querySelector(".content").src = "main.html";
    } else {
        document.querySelector(".content").style.visibility = "hidden";
        document.querySelector(".about").style.visibility = "hidden";
        document.querySelector(".projects").style.visibility = "hidden";
    }
}   

function showAbout() {
    document.querySelector(".content").src = "about.html";
}

function showProjects() {
    document.querySelector(".content").src = "projects.html";
}