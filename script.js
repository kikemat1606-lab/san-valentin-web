const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");

botonNo.addEventListener("mouseover",()=>{

const ancho = window.innerWidth - botonNo.offsetWidth;
const alto = window.innerHeight - botonNo.offsetHeight;

const x = Math.random() * ancho;
const y = Math.random() * alto;

botonNo.style.position = "absolute";
botonNo.style.left = x + "px";
botonNo.style.top = y + "px";

});

botonSi.addEventListener("click",()=>{

document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:linear-gradient(135deg,#ff9a9e,#fad0c4);
text-align:center;
color:white;
font-family:Segoe UI;
">

<h1 style="font-size:50px;">Sabía que dirías que sí ❤️</h1>

<img src="img/perrita.jpg"
style="
width:350px;
border-radius:20px;
margin-top:20px;
box-shadow:0 15px 30px rgba(0,0,0,0.3);
">

<p style="font-size:25px;margin-top:20px;">
ESOOOO PERRITAAAA LADRAMEEEE 🥰
</p>

</div>

`;

});