var fechaInicio = "";
var horaFin="";
var horaInicio="";
var equipo ="";
var sala="Audio digital";
var today = new Date();

function cambio(btn){
    equipo = btn.value;
    console.log(equipo)

}
function  saveReserve(){
    fechaInicio=document.getElementById("datePicker").value; 
    horaFin=document.getElementById("datePicker3").value; 
    horaInicio=document.getElementById("datePicker2").value; 

    localStorage.setItem('2', fechaInicio);
    localStorage.setItem('3', horaInicio);
    localStorage.setItem('4', horaFin);
    localStorage.setItem('5',equipo);
    localStorage.setItem('6', sala);

    if(fechaInicio == ""){
        alert("Ingrese la fecha de la reserva");
    } else if(horaFin ==""){
        alert("Ingrese hora de fin de la reserva");
    } else if(horaInicio ==""){
        alert("Ingrese hora de inicio de la reserva");
    } else if(equipo == ""){
        alert("Seleccione el quipo a reservar");
    }else{
        alert("Se ha reservado su equipo exitosamente");
    }
    
}

function fecha(){
    
    console.log("holaaaa");
}


function labOnChange(sel){
    if(sel.value=="lab-audio"){
        sala="Audio digital"
        info1 = document.getElementById("o-inforeserve");
        info1.style.display = "";

        info2 = document.getElementById("o-inforeserve2");
        info2.style.display = "none";

        info3 = document.getElementById("o-inforeserve3");
        info3.style.display = "none";
    }
    else if(sel.value=="lab-graph-one"){
        sala="Gráfica digital"
        info1 = document.getElementById("o-inforeserve");
        info1.style.display = "none";

        info2 = document.getElementById("o-inforeserve2");
        info2.style.display = "";

        info3 = document.getElementById("o-inforeserve3");
        info3.style.display = "none";
    }
    else if(sel.value=="lab-video"){
        sala="Video digital"
        info1 = document.getElementById("o-inforeserve");
        info1.style.display = "none";

        info2 = document.getElementById("o-inforeserve2");
        info2.style.display = "none";

        info3 = document.getElementById("o-inforeserve3");
        info3.style.display = "";
    }
    else{
        sala="Audio digital"
        info1 = document.getElementById("o-inforeserve");
        info1.style.display = "none";

        info2 = document.getElementById("o-inforeserve2");
        info2.style.display = "none";

        info3 = document.getElementById("o-inforeserve3");
        info3.style.display = "none";
    }
}

