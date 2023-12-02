import React from 'react'

function Departamento() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Departamento</h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Numero"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Nombre"/>
    </div>
  </div>
  <form>
  <div class="col">
  <textarea class="form-control" rows="5" id="comment" placeholder="Mensaje"></textarea>
  </div>
  </form>
</form>
<form>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Cantidad"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Jefe "/>
  </div>
  <div class="col">
  <input type="text" class="form-control" placeholder="Fecha Inicio Trabajo"/>
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
export default Departamento;