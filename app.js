// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigoSecreto = [];
let cantidadNombres=0;

let NombreIngresado = document.querySelector('input');

function agregarAmigo()
{
    if(NombreIngresado.value.length == 0)
    {
        alert("EL campo no puede quedar en blanco,ingrese un nombre!!");
        return false();
    }
    else
    {
        nombresAmigoSecreto.push(NombreIngresado.value);
        cantidadNombres++;
        MostrarLista(cantidadNombres)
        NombreIngresado.value = "";
    }
}

function MostrarLista(posicion)
{
   let impresion = document.querySelector('ul');
   
   impresion.innerText = "";

   for(let i =0;i<cantidadNombres;i++)
   {
    let li = document.createElement('li');
    li.textContent = nombresAmigoSecreto[i];
    impresion.appendChild(li);
   }
    
}

function sortearAmigo()
{
    let amigo = Math.floor(Math.random()*cantidadNombres);
    let impresion = document.querySelector('ul');
    impresion.textContent = "";
    impresion.textContent = "Su amigo secreto es: "+nombresAmigoSecreto[amigo];
    nombresAmigoSecreto.length = 0;
    cantidadNombres = 0;
    
}