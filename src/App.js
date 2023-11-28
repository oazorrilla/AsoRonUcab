import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Registrar from "./pages/Registrar";
import About from "./pages/About";
import login from "./pages/login";
import Tienda from "./pages/Tienda";
import Compra from "./pages/Compra";
import detalle from "./pages/detalle";
import Evento from "./pages/Evento";
import Proveedor from "./pages/Proveedor"
import Empleado from "./pages/Empleado"
import Departamento from "./pages/Departamento"
import Cliente from "./pages/Cliente";
import ProveedorAfiliado from "./pages/ProveedorAfiliado";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contacto from "./pages/Contacto";
import DetalleEvento from "./Components/DetalleEvento";
import EntradaEvento from "./pages/EntradaEvento";
import Venta from "./pages/Venta";


function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" Component={Home}/>
         
          <Route exact path="/Empleado" Component={Empleado}/>
          <Route exact path="/login" Component={login}/>
          <Route exact path="/Registrar" Component={Registrar}/>
          <Route exact path="/Tienda" Component={Tienda}/>
          <Route exact path="/Compra" Component={Compra}/>
          <Route exact path="/detalle" Component={detalle}/>
          <Route exact path="/Evento" Component={Evento}/>
          <Route exact path="/Contacto" Component={Contacto}/>
          <Route exact path="/Proveedor" Component={Proveedor}/>
          <Route exact path="/Departamento" Component={Departamento}/>
          <Route exact path="/Cliente" Component={Cliente}/>
          <Route exact path="/ProveedorAfiliado" Component={ProveedorAfiliado}/>
          <Route exact path="/DetalleEvento" Component={DetalleEvento}/>
          <Route exact path="/EntradaEvento" Component={EntradaEvento}/>
          <Route exact path="/Venta" Component={Venta}/>
        </Routes>
        <Footer/>
    </Router>
  </div>
  );
}

export default App;
