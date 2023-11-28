import React from 'react'

function FormEntrada() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Entrada </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre"/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Precio"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Codigo"/>
  </div>
  </div>
  <div class="col">
  <textarea class="form-control" rows="5" id="comment" placeholder="Descripcion"></textarea>
  </div>
</form>

<div class="col-12 text-center ">
        <button type="button"  class="btn btn-dark"  >
        Aceptar
       
        </button>
      </div>


      </div>
        
    );
}
export default FormEntrada;