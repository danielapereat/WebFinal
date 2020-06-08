var sala="";
function ProgOnChange(sel){
    if(sel.value=="adobe-photoshop"){
        info1 = document.getElementById("o-location");
        info1.style.display = "";

        info2 = document.getElementById("o-location1");
        info2.style.display = "none";

        info3 = document.getElementById("o-location2");
        info3.style.display = "none";
    }
    else if(sel.value=="adobe-illustrator"){
        info1 = document.getElementById("o-location");
        info1.style.display = "none";

        info2 = document.getElementById("o-location1");
        info2.style.display = "";

        info3 = document.getElementById("o-location2");
        info3.style.display = "none";
    }
    else if(sel.value=="adobe-xd"){
        info1 = document.getElementById("o-location");
        info1.style.display = "none";

        info2 = document.getElementById("o-location1");
        info2.style.display = "none";

        info3 = document.getElementById("o-location2");
        info3.style.display = "";
    }
    else{
        info1 = document.getElementById("o-location");
        info1.style.display = "none";

        info2 = document.getElementById("o-location1");
        info2.style.display = "none";

        info3 = document.getElementById("o-location2");
        info3.style.display = "none";
    }
}

function sala1(){
    sala = document.getElementById("grafica1").getAttribute("value");
    localStorage.setItem('7', sala);
}
function sala2(){
    sala = document.getElementById("audio1").getAttribute("value");
    localStorage.setItem('7', sala);
}
function sala3(){
    sala = document.getElementById("video1").getAttribute("value");
    localStorage.setItem('7', sala);
}