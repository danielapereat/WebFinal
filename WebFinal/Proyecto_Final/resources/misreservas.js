var row;
var fechaInicio= localStorage.getItem('2');
var horaInicio=localStorage.getItem('3');
var horaFin=localStorage.getItem('4');
var equipo=localStorage.getItem('5');
var sala=localStorage.getItem('6')

window.onload=agregar;
function deleteRow(btn) {
    row = btn.parentNode.parentNode;
}

function cancelar(){
    row.parentNode.removeChild(row);
    localStorage.clear();
}

function agregar(){
    if(localStorage.length === 0){

    }else {
        document.getElementById("tablaprueba").insertRow(1).innerHTML = 
        '<td>'+ fechaInicio + '</td>' +
        '<td>'+horaInicio+'-'+horaFin+'</td>' +
        '<td>'+sala+'</td>' +
        '<td>'+equipo+'</td>' +
        '<td>' + 
        '<a type="button" href="#Inconsistency" data-toggle = "modal" target="_blank" class="btn btn-primary o-Button" id="loginbtn" onclick="deleteRow(this)">Cancelar</a>' +
        '<a  type="button" href="reservar.html" class="btn btn-primary o-Button" id="loginbtn"> Reprogramar</a>'
        '</td>';
    }
    
}