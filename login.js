const inputs = document.querySelectorAll(".input");


function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}


inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);

});

function showPass() {
    var pass = document.getElementById("password");
    if (pass.hasAttribute("type")) {
        pass.setAttribute("type", "text");
        document.getElementById("sho").style.visibility = "visible";
        document.getElementById("pass").style.visibility = "hidden";
    }
}

function hidePass() {
    var pass = document.getElementById("password");
    if (pass.hasAttribute("type")) {
        pass.setAttribute("type", "password");
        document.getElementById("sho").style.visibility = "hidden";
        document.getElementById("pass").style.visibility = "visible";
    }
}