function Login(){ 
    var usuario=document.getElementById("username").value; 
    var password=document.getElementById("password").value; 
    if (usuario=="daniela.perea" && password=="1234") { 
    window.location="inicio.html"; 
    } 
    else if (usuario=="angela.marin" && password=="1234") { 
    window.location="inicio.html"; 
    }
    else if (usuario=="lesly.lucumi" && password=="1234") { 
        window.location="inicio.html"; 
        } 
    else if (usuario=="" && password=="") { 
        alert("Porfavor ingrese, nombre de usuario y contraseña"); 
    } 
    else{
        alert("Nombre de usuario y contraseña incorrectos."); 
    }
} 