import React from 'react'

function FormVenta() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Compra </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Numero Factura "/>
    </div>
    <div class="col">
    <select id="inputState" class="form-control">
    <option selected>Tienda</option>
    <option> Online</option>
    <option> Fisica </option>
  </select>
    </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Fecha "/>
  </div>
  <div class="col">
  <input type="text" class="form-control" placeholder=" Total"/>
</div>
<div class="col">
<input type="text" class="form-control" placeholder=" Punto Ganado"/>
</div>
  </div>
  


<div class="col-12 text-center ">
        <button type="button"  class="btn btn-dark"  >
        Aceptar
       
        </button>
      </div>


      </form>
      </div>
        
    );
}
export default FormVenta;