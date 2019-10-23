
function greeting() {
    let name = prompt("Please enter your username")
    while (name === "") {
        name = prompt("Please enter your username")
    }
    if (name !== null) {
        document.getElementById("Greeting").innerHTML = name + ", Welcome to my quiz";
        $("#start").hide(1000)  

    }
}
    
function openTab(evt, content) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    document.getElementById(content).style.display = "block";
    evt.currentTarget.className += " active";
    }
        
function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
}

score = 0
function checkAnswer() {
    var checked = document.getElementById("correct1").checked
    if (checked){
        alert("correct")
        $(".incorrect1").hide(1000)
        score++
        document.getElementById('score').innerHTML = score
    } else{
        alert("incorrect")
        $(".incorrect1").hide(1000)
    }
}

function checkAnswer2() {
    var checked = document.getElementById("correct2").checked
    if (checked){
        alert("correct")
        $(".incorrect2").hide(1000)
        score++
        document.getElementById('score').innerHTML = score
    } else{
        alert("incorrect")
        $(".incorrect2").hide(1000)
    }
}

