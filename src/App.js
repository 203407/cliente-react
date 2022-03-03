import Login from "./Componentes/Login";
import Register from "./Componentes/Register";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from "./Componentes/Profile";


function App() {
  return (




      <Router>

        <Routes>
          <Route  exact path="/" element={<Login/>} ></Route>
          <Route  exact path="/register" element={<Register/>} ></Route>
          <Route  exact path="/login" element={<Login/>} ></Route>
          <Route  exact path="/profile" element={<Profile/>} ></Route>
        </Routes>

      </Router>

  );
}

export default App;
