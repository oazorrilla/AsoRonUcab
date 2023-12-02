import React from 'react'

function FormProveedor() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Proveedor </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Razon Social"/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Denominacion Comercial"/>
  </div>
  </div>
</form>
<form>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Documentacion RIF"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Direccion Fiscal"/>
  </div>
  <div class="col">
  <input type="text" class="form-control" placeholder="Pagina WEB"/>
</div>
</div>
</form>
<form>
<div class="row">
  <div class="col">
  <input type="text" class="form-control" placeholder="Direccion Fisica"/>
</div>
<div class="col">
  <select id="inputState" class="form-control">
  <option selected>Tipo De Ron</option>
  <option>...</option>
</select>
  </div>
</div>
</form>

<form>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Telefono de Contacto"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Personal Contacto"/>
  </div>
  <div class="col">
  <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
  </div>
</div>


<div class="col-12 text-center">
        <button type="button"  class="btn btn-dark"  >
        Aceptar
       
        </button>
      </div>
      
      </form>
      </div>
);

}
export default FormProveedor;