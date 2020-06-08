var sala1=localStorage.getItem('7');
var sala="";
window.onload=verificar;
function labsOnChange(sel){
    if(sel.value=="lab-audio"){
        info1 = document.getElementById("o-location");
        info1.style.display = "";

        info2 = document.getElementById("o-location1");
        info2.style.display = "none";

        info3 = document.getElementById("o-location2");
        info3.style.display = "none";
    }
    else if(sel.value=="lab-graph-one"){
        info1 = document.getElementById("o-location");
        info1.style.display = "none";

        info2 = document.getElementById("o-location1");
        info2.style.display = "";

        info3 = document.getElementById("o-location2");
        info3.style.display = "none";
    }
    else if(sel.value=="lab-video"){
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
function verificar(){
    if(sala1 == "lab-audio"){
        info1 = document.getElementById("o-location");
        info1.style.display = "";

        info2 = document.getElementById("o-location1");
        info2.style.display = "none";

        info3 = document.getElementById("o-location2");
        info3.style.display = "none";
    } else if(sala1 == "lab-graph-one"){
        info1 = document.getElementById("o-location");
        info1.style.display = "none";

        info2 = document.getElementById("o-location1");
        info2.style.display = "";

        info3 = document.getElementById("o-location2");
        info3.style.display = "none";
    } else if(sala1 == "lab-video"){
        info1 = document.getElementById("o-location");
        info1.style.display = "none";

        info2 = document.getElementById("o-location1");
        info2.style.display = "none";

        info3 = document.getElementById("o-location2");
        info3.style.display = "";
    }else{}
}
function sala1(){
    sala = document.getElementById("audio1").getAttribute("value");
    localStorage.setItem('7', sala);
}
function sala2(){
    sala = document.getElementById("grafica1").getAttribute("value");
    localStorage.setItem('7', sala);
}
function sala3(){
    sala = document.getElementById("video1").getAttribute("value");
    localStorage.setItem('7', sala);
}