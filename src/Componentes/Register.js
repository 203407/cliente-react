import {useState} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"



const urlPost = "http://localhost:8000/api/v1/register/"
const urlPost2 = "http://localhost:8000/api/v2/register/"

const Login = () => {
    const [datos,setDatos] = useState({})

    const pot = (dat) => {
        console.log(dat)
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
        const data = await fetch(urlPost2,peticion)
        const dato = await data.json();

        if (dato != 400){
            //console.log('Registro exitoso')
            alert('registro exitoso')
            window.location= "/login"
        }else{
            //console.log('Registro erorr: ' + dato.payload)
            //alert('error: '+ JSON.stringify(dato.pay_load))
            alert('Por favor verifique bien los campos'+dato.error)

        }

    }

    const handleChange = (e) =>{
        setDatos({
            ...datos,[e.target.name] : e.target.value,
        });

    }

    return(
        /*<div>
            <input  type= "text"  name="username" placeholder="username" onChange={handleChange}   />
            <input  type= "password"  name="password" placeholder="password" onChange={handleChange}  />
            <input  type= "text"  name="email" placeholder="email" onChange={handleChange} />

            <button onClick = {()=> pot(datos)} >Register</button>
        </div>*/

        <Card style={{ width: '18rem' }} className="container card_register">
            <Card.Body>

                <div className="form-group ">
                    <label htmlFor="exampleDropdownFormPassword1">Username</label>
                    <input type="text" className="form-control input_login" name="username" placeholder="username" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Password</label>
                    <input type="password" className="form-control input_login" name="password" placeholder="password" onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Password2</label>
                    <input type="password" className="form-control input_login" name="password2" placeholder="password2" onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Email</label>
                    <input type="email" className="form-control input_login" name="email" placeholder="email" onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">First name</label>
                    <input type="text" className="form-control input_login" name="first_name" placeholder="first_name" onChange={handleChange}  />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword1">Last name</label>
                    <input type="text" className="form-control input_login" name="last_name" placeholder="last_name" onChange={handleChange}  />
                </div>

                <button type="submit" onClick = {()=> pot(datos)} className="btn btn-primary input_sub">Registrarse</button>

                <div className="dropdown-divider"></div>
            </Card.Body>
        </Card>
    )
}

export default Login;