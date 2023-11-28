import React from 'react'

function ListEmpleado() {   
    return (
        <div class="container">
     
        <div class="card">
        <div class="card-header">
          Tabla Empleado
        </div>
        <div class="card-body">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Usuario </th>
            <th scope="col"> Contraseña</th>
            <th scope="col">Fecha Registrado</th>
            <th scope="col"> Imagen</th>
            <th scope="col">Numero Usuario</th>
            <th scope="col">Profesion</th>
            <th scope="col">Fecha Inicio Trabajo</th>
            <th scope="col">Titulo Puesto Empleado</th>
            <th scope="col">Fecha Inicio Turno</th>
            <th scope="col">Fecha Fin Turno</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td> Mark</td>
            <td>Otto</td>
            <td>@mdo</td> 
            <td><img src='https://static.vecteezy.com/system/resources/previews/005/005/840/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg'   alt="" width="50px" height="50px"   /></td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td><img src='https://static.vecteezy.com/system/resources/previews/005/005/840/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg'   alt="" width="50px" height="50px"   /></td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td><img src='https://static.vecteezy.com/system/resources/previews/005/005/840/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg'   alt="" width="50px" height="50px"   /></td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
    
          </tr>
        </tbody>
      </table>
      
        </div>
      </div>

     
      </div>
        
    );
}
export default ListEmpleado;