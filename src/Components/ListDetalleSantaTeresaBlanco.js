import React from "react";
import CarouselCatalogo from "./CarouselCatalogo";
import {Link} from 'react-router-dom'




 function ListDetalleSantaTeresa() {
    return (
        <div>
        <div class="card mb-3">
        <div class="row g-0 d-flex align-items-center">
          <div class="col-lg-4 d-none d-lg-flex">
            <CarouselCatalogo/>
          </div>
          <div class="col-lg-8">
            <div class="card-body py-5 px-md-5">
             <div class="text-center">
             <h1> Santa Teresa Blanco Venezuela  </h1>
             <h1 class="display-6">Precio: $8.90</h1>
             <br/>
             <div class="card bg-light mb-3"  >
             <div class="card-header"> <h5> Descripcion</h5></div>
             <div class="card-body text-center">
               
               <p class="card-text   blockquote"> 
               Más de 226 años de historia en el consejo han inculcado carácter en nuestra gente y en nuestra gente y en nuestros rones, haciendo de santa teresa la insignia del ron de Venezuela.

               Santa Teresa Blanco surge de la mezcla de rones de primera añejados hasta por 5 Años en barriles de roble blanco americano, que luego pasa por un complejo proceso de filtrado de carbón hasta lograr su color cristalino realizando sus notas dulces y cítricas sin perder su cuerpo. Este exquisito balance creados por los maestros roneros hace este ron ideal para la coctelería del alto nivel.
               
               Volumen de alcohol: 40% VOL. ALC
               </p>
              
             </div>
             </div>
             <h1 class="display-6">Presentacion: 0.70 Lts.</h1>
             <br/>
             <Link to="/Tienda">
             <button type="button" class="btn btn-primary btn-lg btn-dark" >Catalogo</button>
             </Link>
            
             </div>
      
           
           
           
             </div>
            </div>
          </div>
          </div>
          </div>
        
        
        
    );
}
export default ListDetalleSantaTeresa;