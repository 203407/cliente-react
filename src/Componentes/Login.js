import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

const urlPost = "http://localhost:8000/api/v1/login/"

const Login = () => {
    const [datos,setDatos] = useState({})
    const [shown, setShown] = useState(false)

   const pot = (dat) => {
        const peticion = {
            method: 'POST',
            body: JSON.stringify(dat),
            headers: {
                "Content-type": "application/json"
            }
        }
        post(peticion)
    }

    const post = async (peticion)  => {

        const data = await fetch(urlPost,peticion)
        const dato = await data.json();


        if (data.ok){
            window.localStorage.setItem('id', dato.user_id);
            window.localStorage.setItem('token', dato.token);

            window.location = "/profile"
        }else{
            alert("Error de inicio de sesion")
        }

    }

    const handleChange = (e) =>{
        setDatos({
            ...datos,[e.target.name] : e.target.value,
        });
    }

    const switchShown = () => setShown(!shown);


    return(


            <Card style={{  width: '20rem' , height:' 21rem', top:'7rem' }} className="container card_login">
                <Card.Body>
                    <div className="login">
                        <h2>Login</h2>
                    </div>

                    <div className="form-group ">
                        <label htmlFor="exampleDropdownFormPassword1">Username</label>
                        <input type="text" className="form-control input_login" name="username" placeholder="username" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormPassword1">Password</label>
                        <input type={shown ? 'text' : 'password'}  className="form-control input_login_pass" name="password" placeholder="password" onChange={handleChange}  />
                        <input type="checkbox"  onClick={switchShown}  className={"login_butonpass"}/>
                    </div>

                    <button type="submit" onClick = {()=> pot(datos)} className="btn btn-primary input_sub">Iniciar sesion</button>
                    <div className="dropdown-divider"></div>
                    <Link  className="input_new"  to="/register">Nuevo? Sing up</Link>

                </Card.Body>
            </Card>

    )
}

export default Login;
