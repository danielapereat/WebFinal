function feedbackSave(){
    alert ("Se ha guardado los cambios")
}

function Mostrar()
{
    document.getElementById("Password").style.display = "block";
}
function Ocultar()
{
    document.getElementById("Password").style.display = "none";
}


function showHideElement(){
    var Password = document.getElementById("Password");

    if (Password.style.display == "none")
    {
        Mostrar();
    } else {
        Ocultar();
    }
}

function changePassword(){
    alert ("Se ha guardado los cambios")
    Ocultar();  
}



    

    
