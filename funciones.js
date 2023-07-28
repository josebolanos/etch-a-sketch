   const body = document.body
    
   const button = document.createElement('button');
   button.classList.add('boton');
   button.style.width = '100px';
    button.style.height = '100px';
      button.textContent = 'Cambiar Tamaño & Reset';

         body.appendChild(button);

         let cuadriculaGenerada = false;

function creacion() {


    const CambiarTamaño = parseInt(prompt('Ingresa el tamaño del cuadro'));

    

    const divPadre = document.createElement('div');
    divPadre.classList.add('divPadre');

     body.appendChild(divPadre);


    let divPadreWith = divPadre.offsetWidth;
    let CuadradosDivPadre = Math.floor(divPadreWith / (parseInt(CambiarTamaño)));

        divPadre.style.gridTemplateColumns = `repeat(${CuadradosDivPadre}, ${CambiarTamaño}px)`;
            divPadre.style.gridTemplateRows = `repeat(${CuadradosDivPadre}, ${CambiarTamaño}px)`;
  

        for(i = 1; i <= CuadradosDivPadre * CuadradosDivPadre; i++) {
            
            let divHijo = document.createElement('div');
            divHijo.className = 'divHijo';
            divHijo.style.width = (CambiarTamaño - 2) + 'px';
            divHijo.style.height = (CambiarTamaño - 2) + 'px';
            divHijo.style.border = '1px solid black';
            divPadre.appendChild(divHijo);
        
        
        divHijo.addEventListener('mousemove', () =>{
           
            divHijo.style.backgroundColor = 'blue'
        
        })}
        
        cuadriculaGenerada = true;
        
}


function reset() {
    if (cuadriculaGenerada) {
        window.location.reload();
    } else {
        creacion();
    }
}

button.addEventListener('click', () => {
    reset();
})






 









  

  
   

  

















