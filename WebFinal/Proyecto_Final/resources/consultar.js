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