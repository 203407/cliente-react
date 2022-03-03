import Login from "./Componentes/Login";
import Register from "./Componentes/Register";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Componentes/Home";
import Profile from "./Componentes/Profile";


function App() {
  return (




      <Router>
       {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

          <div className="container">

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link  className="nav-link"  to="/register">Registrarse</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mascotas">Mascotas</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/tipo">Tipo</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/cita">Cita</Link>
                </li>
              </ul>
            </div>
          </div>

        </nav>
*/}


        <Routes>
          <Route  exact path="/" element={<Login/>} ></Route>
          <Route  exact path="/home" element={<Home/>} ></Route>
          <Route  exact path="/register" element={<Register/>} ></Route>
          <Route  exact path="/login" element={<Login/>} ></Route>
          <Route  exact path="/profile" element={<Profile/>} ></Route>
          {/*<Route  exact path="/mascotas" element={<Mascota/>} ></Route>
          <Route  exact path="/tipo" element={<Tipo/>} ></Route>
          <Route  exact path="/cita" element={<Citas/>} ></Route>*/}
        </Routes>

      </Router>

  );
}

export default App;
