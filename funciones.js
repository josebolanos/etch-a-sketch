    const body = document.body
    
    const divPadre = document.createElement('div');
    divPadre.classList.add('divPadre');
    divPadre.style.display = 'flex';
    divPadre.style.flexWrap = 'wrap';
    divPadre.style.width = '100%';
    divPadre.style.height = '100%';

    
    body.appendChild(divPadre);





const fullScreen = window.innerHeight * window.innerWidth

for(i = -256; i <= fullScreen; i+=256) {
    
    const divHijo = document.createElement('div');
divHijo.classList.add('divHijo');
divHijo.style.width = '14px'
divHijo.style.height = '14px'
divHijo.style.border = '1px solid black'



divPadre.appendChild(divHijo);
divHijo.addEventListener('mousemove', () =>{
   
    divHijo.style.backgroundColor = 'red'

}
)

}










