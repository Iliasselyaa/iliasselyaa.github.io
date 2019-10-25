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

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

//sports
$.get("https://opentdb.com/api.php?amount=10&category=21&type=multiple", function (data) {
    for (i = 0; i < 10; i++) {
        document.getElementById(i).innerHTML = data.results[i].question
        let items = data.results[i].incorrect_answers;
        let correct = data.results[i].correct_answer;
        items.push(correct)
        let answers = shuffle(items)
        for (q = 0; q < 4; q++) {
            var x = document.createElement("INPUT");
            x.setAttribute("type", "radio")
            x.setAttribute("name", "question")
            x.setAttribute("value", answers[q])
            x.setAttribute("class", i);
            var enter = document.createElement("BR");
            document.getElementById(i).appendChild(enter)
            document.getElementById(i).appendChild(x);
            var label = document.createElement("LABEL")
            document.getElementById(i).appendChild(label)
            label.textContent = answers[q];
        }
        var enter2 = document.createElement("BR");
        document.getElementById(i).appendChild(enter2)
        var button = document.createElement("BUTTON")
        document.getElementById(i).appendChild(button)
        button.setAttribute("id", "q" + (i + 1))
        button.onclick = checkAnswer
        button.textContent = "Check Answer";
    }



    score = 0
    var table = document.getElementById("score")
    function checkAnswer() {
        
        var i = $('input[name=question]:checked').attr('class');
        var value = $('input[name=question]:checked', '#' + i).val();
        let correct = data.results[i].correct_answer;
        if (value == correct) {
            alert("correct")
            score++
            table.textContent = score
            $("."+i).hide(1000)
            var Num = parseInt(i)+1
            $("#q"+Num).hide(1000)
            console.log("#q"+Num)
        } else {
            alert("incorrect")
            $("."+i).hide(1000)
            var Num = parseInt(i)+1
            $("#q"+Num).hide(1000)
            console.log("#q"+Num)
        }
    }

});
// celebrities

$.get("https://opentdb.com/api.php?amount=10&category=26&type=multiple", function (data) {
    for (i = 0; i < 10; i++) {
        document.getElementById(i+10).innerHTML = data.results[i].question
        let items = data.results[i].incorrect_answers;
        let correct = data.results[i].correct_answer;
        items.push(correct)
        let answers = shuffle(items)
        for (q = 0; q < 4; q++) {
            var x = document.createElement("INPUT");
            x.setAttribute("type", "radio")
            x.setAttribute("name", "question10")
            x.setAttribute("value", answers[q])
            x.setAttribute("class", (i+10));
            var enter = document.createElement("BR");
            document.getElementById(i+10).appendChild(enter)
            document.getElementById(i+10).appendChild(x);
            var label = document.createElement("LABEL")
            document.getElementById(i+10).appendChild(label)
            label.textContent = answers[q];
        }
        var enter2 = document.createElement("BR");
        document.getElementById(i+10).appendChild(enter2)
        var button = document.createElement("BUTTON")
        document.getElementById(i+10).appendChild(button)
        button.setAttribute("id", "q" + ((i+10)+ 1))
        button.onclick = checkAnswer10
        button.textContent = "Check Answer";
    }



    score = 0
    var table = document.getElementById("score")
    function checkAnswer10() {
        var i = $('input[name=question10]:checked').attr('class');
        var value10 = $('input[name=question10]:checked', '#' + parseInt(i)).val();
        number = parseInt(i)- 10
        var correct10 = data.results[number].correct_answer;

        if (value10 == correct10) {
            alert("correct")
            score++
            table.textContent = score
            $("."+parseInt(i)).hide(1000)
            var Num = parseInt(i)+1
            $("#q"+Num).hide(1000)
        
        } else {
            alert("incorrect")
            $("."+parseInt(i)).hide(1000)
            var Num = parseInt(i)+1
            $("#q"+Num).hide(1000)
            
        }
    }

});

//history
$.get("https://opentdb.com/api.php?amount=10&category=23&type=multiple", function (data) {
    for (i = 0; i < 10; i++) {
        document.getElementById(i+20).innerHTML = data.results[i].question
        let items = data.results[i].incorrect_answers;
        let correct = data.results[i].correct_answer;
        items.push(correct)
        let answers = shuffle(items)
        for (q = 0; q < 4; q++) {
            var x = document.createElement("INPUT");
            x.setAttribute("type", "radio")
            x.setAttribute("name", "question20")
            x.setAttribute("value", answers[q])
            x.setAttribute("class", (i+20));
            var enter = document.createElement("BR");
            document.getElementById(i+20).appendChild(enter)
            document.getElementById(i+20).appendChild(x);
            var label = document.createElement("LABEL")
            document.getElementById(i+20).appendChild(label)
            label.textContent = answers[q];
        }
        var enter2 = document.createElement("BR");
        document.getElementById(i+20).appendChild(enter2)
        var button = document.createElement("BUTTON")
        document.getElementById(i+20).appendChild(button)
        button.setAttribute("id", "q" + ((i+20) + 1))
        button.onclick = checkAnswer20
        button.textContent = "Check Answer";
    }



    score = 0
    var table = document.getElementById("score")
    function checkAnswer20() {
        
        var i = $('input[name=question20]:checked').attr('class');
        var value20 = $('input[name=question20]:checked', '#' + parseInt(i)).val();
        number20 = parseInt(i)- 20
        let correct20 = data.results[number20].correct_answer;
        if (value20 == correct20) {
            alert("correct")
            sreco++
            table.textContent = score
            $("."+i).hide(1000)
            var Num = parseInt(i)+1
            $("#q"+Num).hide(1000)
            console.log("#q"+Num)
        } else {
            alert("incorrect")
            $("."+i).hide(1000)
            var Num = parseInt(i)+1
            $("#q"+Num).hide(1000)
            console.log("#q"+Num)
        }
    }

});


