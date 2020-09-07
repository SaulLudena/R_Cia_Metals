
//una funcion de constante que nos permite ocultar o mostrar el nav dependiendo de la dimensión de la página
const navSlide =() =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        
        //alternar el nav responsivo
        nav.classList.toggle('nav-active');
       
        //links animadors
        navLinks.forEach((link, index) => {
           if(link.style.animation){
               link.style.animation='';
           }else{
               link.style.animation=`navLinkFade 0.5s ease forwards ${index /7 + 0.4}s`;
               console.log(index / 1 + 0.3);
           }
            
           //animacion del nav responsivo
           burger.classList.toggle('toggle');
    }); 
    });

}
        
 

navSlide();
