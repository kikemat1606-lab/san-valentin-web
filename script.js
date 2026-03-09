const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

/* mover botón NO por toda la pantalla */

botonNo.addEventListener("mouseover", ()=>{

const ancho = window.innerWidth - botonNo.offsetWidth;
const alto = window.innerHeight - botonNo.offsetHeight;

const x = Math.random() * ancho;
const y = Math.random() * alto;

botonNo.style.left = x + "px";
botonNo.style.top = y + "px";

});


/* pantalla cuando presiona SI */

botonSi.addEventListener("click", ()=>{

document.body.innerHTML = `

<div style="height:100vh;display:flex;flex-direction:column;
justify-content:center;align-items:center;
background:linear-gradient(135deg,#ff9a9e,#fad0c4);
font-family:Segoe UI;text-align:center;">

<h1 style="color:white;font-size:50px;margin-bottom:20px;">
Sabía que dirías que sí ❤️
</h1>

<img src="img/foto.jpg" 
style="width:300px;border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,0.3);">

<p style="font-size:25px;color:white;margin-top:20px;">
Te quiero mucho 🥰
</p>

</div>

`;

});