let ubicacionPrincipal = window.pageXOffset;

  AOs.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageXOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top= "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top="-100px"
    }
    ubicacionPrincipal = desplazamientoActual;    
})

//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color="#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color="#000";
        semafor=true;
    }

    enlacesHeader.classList.toogle("menudos")
})