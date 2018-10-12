
window.addEventListener("load",()=>{
    var container;
    container = document.getElementById("c1");
    container.innerText = "¡Hola mundo!";
    container.style.background= "#000000";
    container.style.color = "#1cb723";
    container.style.width = "200px";
    container.style.height = "200px";
    container.innerHTML =  "<input type='text' placeholder='escriba su texto'>";


    var containers = document.querySelectorAll("div.c2");
    containers.forEach(element => {
        element.style.background =  "#009999";
        element.innerHTML =  "<input type='text' placeholder='escriba su texto'>";
    });


    boton = document.getElementById("btn-click");
    boton.onclick = function(evt){
        alert("Hola mundo");
    }
    btncopy = document.getElementById("btncopy");
    btnCopy.onclick = function(evt){
        let msj = document.getElementById('textMsj').value;
        document.getElementById('showMsj').innerText = msj;
    } 
});


