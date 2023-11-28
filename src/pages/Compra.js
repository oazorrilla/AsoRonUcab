
import {Link} from 'react-router-dom'
function compra() {
  return (
    <div class="container">
    <div class="row">
        <div class="col py-5 text-center">
            <h2>Formulario de Pago</h2>
        </div>
    </div> 

    <div class="row">

        <div class="col-12 col-md-8 order-2 order-md-1">
            <h4 class="mb-3">Direccion de envio</h4>
            <form action="">
               
                <div class="row">
                    <div class="col-12 col-sm-6 mb-3">
                        <label for="nombre">Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre"/>
                    </div>

                    <div class="col-12 col-sm-6 mb-3">
                        <label for="apellido">Apellido</label>
                        <input type="text" class="form-control" id="apellido" name="apellido"/>
                    </div>
                </div>

              
                <div class="mb-3">
                    <label for="usuario">Usuario</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">@</span>
                        </div>
                        <input class="form-control" type="text" id="usuario" placeholder="Usuario" name="usuario"/>
                    </div>
                </div>

                
                <div class="mb-3">
                    <label for="correo">Correo <span class="text-muted">(Opcional)</span></label>
                    <input type="email" class="form-control" id="correo" name="correo" placeholder="nombre@correo.com"/>
                </div>

                
                <div class="mb-3">
                    <label for="direccion">Direccion</label>
                    <input type="text" class="form-control" placeholder="Calle 1234" name="direccion" id="direccion"/>
                </div>

                
                <div class="mb-3">
                    <label for="direccion2">Direccion 2 <span class="text-muted">(Opcional)</span></label>
                    <input type="text" class="form-control" placeholder="Informacion adicional" name="direccion2" id="direccion2"/>
                </div>

                
                <div class="row">
                   
                    <div class="col-12 col-sm-4 mb-3">
                        <label for="pais">Pais</label>
                        <select class="form-control" name="pais" id="pais">
                            <option value="">Seleccionar Pais</option>
                            <option value="argentina">Argentina</option>
                            <option value="españa">España</option>
                            <option value="alemania">Alemania</option>
                            <option value="japon">Japon</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                   
                    <div class="col-12 col-sm-4 mb-3">
                        <label for="pais">Provincia o Estado</label>
                        <select class="form-control" name="pais" id="pais">
                            <option value="">Seleccionar Estado</option>
                            <option value="caba">Ciudad Autonoma de Buenos Aires</option>
                            <option value="bsas">Buenos Aires</option>
                            <option value="cordoba">Cordoba</option>
                            <option value="mendoza">Mendoza</option>
                            <option value="salta">Salta</option>
                        </select>
                    </div>
                   
                    <div class="col-12 col-sm-4 mb-3">
                        <label for="codigo-postal">Codigo Postal</label>
                        <input class="form-control" type="text" id="codigo-postal"/>
                    </div>
                </div>


               
                <div class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="misma-direccion"/>
                    <label class="custom-control-label" for="misma-direccion">Enviar a la misma direccion</label>
                </div>

                <div class="custom-control custom-checkbox">
                    <input class="custom-control-input" type="checkbox" id="guardar-informacion"/>
                    <label class="custom-control-label" for="guardar-informacion">Guardar informacion para la siguiente compra</label>
                </div>

               
                <hr class="mb-2"></hr>
                <div class="d-block mb-3">
                <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"/>
                <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
              </div>
              <div class="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"/>
                <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
              </div>
                </div>

                <div class="row">
                    <div class="col-12 col-sm-6 mb-3">
                        <label for="tarjeta">Nombre en la tarjeta</label>
                        <input type="text" id="tarjeta" class="form-control"/>
                        <small class="text-muted">Nombre completo como se ve en la tarjeta</small>
                    </div>

                    <div class="col-12 col-sm-6 mb-3">
                        <label for="numero-tarjeta">Numero de tarjeta</label>
                        <input type="text" id="numero-tarjeta" class="form-control"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6 col-sm-4 mb-3">
                        <label for="tarjeta-expiracion">Expiracion</label>
                        <input type="text" id="tarjeta-expiracion" class="form-control"/>
                    </div>

                    <div class="col-6 col-sm-4 mb-3">
                        <label for="tarjeta-cvv">CVV</label>
                        <input type="text" id="tarjeta-cvv" class="form-control"/>
                    </div>
                </div>
                <Link to="/Venta">
                <input type="submit" value="Continuar al pago" class="btn btn-block btn-lg btn-primary"/>
                </Link>
            </form>
        </div>
        

        <div class="col-12 col-md-4 order-1 order-md-2">
                <h4 class="mb-3 d-flex justify-content-between align-items-center">
                    <span class="text-muted">Tu Carrito</span>
                    <span class="badge - badge-secondary badge-pill">3</span>
                </h4>

                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h6 class="my-0">Nombre del producto</h6>
                            <small class="text-muted">Descripcion del producto</small>
                        </div>
                        <span class="text-muted">$12</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h6 class="my-0">Segundo producto</h6>
                            <small class="text-muted">Descripcion del producto</small>
                        </div>
                        <span class="text-muted">$8</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h6 class="my-0">Tercer producto</h6>
                            <small class="text-muted">Descripcion del producto</small>
                        </div>
                        <span class="text-muted">$5</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Codigo de descuento</h6>
                            <small class="text-success">CUPONEJEMPLO99</small>
                        </div>
                        <span class="text-success">$5</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between bg-light">
                        <span class="text-muted">Total (USD)</span>
                        <strong>$20</strong>
                    </li>
                </ul>

                <form action="" class="card p-2">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Cupon"/>
                        <div class="input-group-append">
                            <button class="btn btn-secondary">Canjear</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        

        
        </div>
         
  );
}

export default compra;