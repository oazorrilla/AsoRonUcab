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
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" Component={Home}/>
         
          <Route exact path="/about" Component={About}/>
          <Route exact path="/login" Component={login}/>
          <Route exact path="/Registrar" Component={Registrar}/>
          <Route exact path="/Tienda" Component={Tienda}/>
          <Route exact path="/Compra" Component={Compra}/>
          <Route exact path="/detalle" Component={detalle}/>
          <Route exact path="/Evento" Component={Evento}/>
        </Routes>
        <Footer/>
    </Router>
  </div>
  );
}

export default App;
