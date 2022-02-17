import {useState} from "react";


const urlPost = "http://localhost:8000/api/v1/register/usuarios/"

const Login = () => {
    const [datos,setDatos] = useState({})

    const pot = (dat) => {
        const peticion = {
            method: 'POST',
            body: JSON.stringify(dat),
            headers: {
                "Content-type": "application/json",
                'Authorization': "Token 7a853e8dc6235379846cf42151b2448a9eae5a38"
            }
        }
        post(peticion)
    }

    const post = async (peticion)  => {
        const data = await fetch(urlPost,peticion)
        const dato = await data.json();
        console.log(dato)
    }

    const handleChange = (e) =>{
        setDatos({
            ...datos,[e.target.name] : e.target.value,
        });
    }

    return(
        <div>
            <input  type= "text"  name="username" placeholder="username" onChange={handleChange}  />
            <input  type= "password"  name="password" placeholder="password" onChange={handleChange} />
            <input  type= "text"  name="email" placeholder="email" onChange={handleChange} />

            <button onClick = {()=> pot(datos)} > Login</button>
        </div>
    )
}

export default Login;