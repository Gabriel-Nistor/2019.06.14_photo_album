var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var screen = document.getElementById("screen");
var parent = document.getElementById("parent");

function clearSelected() {
    var currentSelected = document.querySelector(".selected");
    if (currentSelected) {
        currentSelected.className = "";
    }
}

parent.addEventListener("click", background);

function background(evt) {
    if (evt.target.className === "DIV") {
        clearSelected();
        evt.target.className = "selected";
        screen.className = evt.target.dataset.bg;
    }
}

function background1() {
    clearSelected();
    screen.className = "background_01";
    if (screen.className === "background_01") {
        one.className = "selected";
    } else {
        one.className = "";
    }
}

one.addEventListener("click", background1);

function background2() {
    clearSelected();
    screen.className = "background_02";
    if (screen.className === "background_02") {
        two.className = "selected";
    } else {
        two.className = "";
    }
}

two.addEventListener("click", background2);

function background3() {
    clearSelected();
    screen.className = "background_03";
    if (screen.className === "background_03") {
        three.className = "selected";
    } else {
        three.className = "";
    }
}

three.addEventListener("click", background3);

function background4() {
    clearSelected();
    screen.className = "background_04";
    if (screen.className === "background_04") {
        four.className = "selected";
    } else {
        four.className = "";
    }
}

four.addEventListener("click", background4);

function background5() {
    screen.className = "background_05";
    if (screen.className === "background_05") {
        five.className = "selected";
    } else {
        five.className = "";
    }
}

five.addEventListener("click", background5);


function background6() {
    clearSelected();
    screen.className = "background_06";
    if (screen.className === "background_01") {
        one.className = "selected";
    } else {
        one.className = "";
    }
}

six.addEventListener("click", background6);

function background7() {
    clearSelected();
    screen.className = "background_07";
    if (screen.className === "background_07") {
        seven.className = "selected";
    } else {
        seven.className = "";
    }
}

seven.addEventListener("click", background7);

function background8() {
    clearSelected();
    screen.className = "background_08";
    if (screen.className === "background_08") {
        eight.className = "selected";
    } else {
        eight.className = "";
    }
}

eight.addEventListener("click", background8);

function background9() {
    clearSelected();
    screen.className = "background_09";
    if (screen.className === "background_09") {
        nine.className = "selected";
    } else {
        nine.className = "";
    }
}

nine.addEventListener("click", background9);

function background10() {
    clearSelected();
    screen.className = "background_10";
    if (screen.className === "background_10") {
        ten.className = "selected";
    } else {
        ten.className = "";
    }
}

ten.addEventListener("click", background10); 