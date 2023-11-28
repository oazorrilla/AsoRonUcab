import React from 'react'

function FormEmpleado() {   
    return (
        <div class="container">

        <div class="text-center">
         <h1> Empleado </h1>
         </div>
        <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Usuario"/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Contraseña"/>
    </div>
    <div class="col">
    <input type="text" class="form-control" placeholder="Fecha"/>
  </div>
  </div>
</form>
<form>
<div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Numero"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Profesion"/>
  </div>
  <div class="col">
  <input type="text" class="form-control" placeholder="Fecha Inicio Trabajo"/>
</div>
</div>
</form>
<form>
<div class="row">
  <div class="col">
  <input type="text" class="form-control" placeholder="Titulo Puesto Trabajo"/>
</div>
<div class="col">
  <input type="text" class="form-control" placeholder=" Hora Inicio Turno"/>
</div>
<div class="col">
    <input type="text" class="form-control" placeholder="Hora Final Turno"/>
  </div>

</div>
</form>

<div class="col-12 text-center">
        <button type="button"  class="btn btn-dark"  >
        Aceptar
       
        </button>
      </div>


      </div>
        
    );
}
export default FormEmpleado;