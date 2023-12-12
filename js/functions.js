jQuery(document).ready(function(){                                          /*($/jQuery) indica en que objeto vamos a trabajar/"document" palabra que reperesenta nuestra pagina web*/
    jQuery(".bars").click(function(e){                                      /*".click" cuando haga click*/
            e.preventDefault();                                             /*".preventDefault" Cambiar el comportamiento Defaults */
            jQuery("header .container nav").toggleClass("open");            /*".toggleClass" cambiar clase */
            jQuery(".bars i").toggleClass("fa-rectangle-xmark");
    });
    jQuery("header .container nav a").click(function(){

            jQuery("header .container nav").removeClass("open"); 
            jQuery(".bars i").removeClass("fa-rectangle-xmark");             /*".removeClass" remover clase */
            var dev = jQuery(this).attr("href");                             /*".attr" obtener el valor del atributo*/
            jQuery("html,body").animate({                                    /*"this" palabra reservada para referirse a un elemento al que le estoy haciendo click*/
            "scrollTop": jQuery(dev).offset().top - 76                           /*".animate" nos permite hacer una accion animada*/
    });                                                                      /*"offset" obtener o establecer las coordenadas de un elemento dentro del DOM de una página web */
    });                                                                                    
});

/* o tambien para llamar funcion

jQuery(document).ready(listo)
funtion listo()
{
}

*/