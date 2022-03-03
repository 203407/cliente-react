import {useState} from "react";
import axios from 'axios';

const urlPot = "http://localhost:8000/api/v1/loadImage/list/"
const urlPut = "http://localhost:8000/api/v3/register/"+window.localStorage.getItem('id')

const Home = () => {
    const [form, setForm] = useState(null)

    /*const handleChangeF = (e) => {
        const formData = new FormData();
        console.log(e.target.files[0].name)
        formData.append("img_profile", e.target.files[0]);
        //formData.append("fileName","img_profile");

        setForm(formData)
        console.log(formData)
    }*/


    /*const pot = () => {
        const peticion = {
            method: 'POST',
            body: form,
            headers: {
                'Authorization': 'token 7ca955805c6e026d07a364291ebb733e79e1f539',
                'Content-Type': 'multipart/form-data'
            }
        }
        post(peticion)
    }*/


    /*const post = async (peticion) => {
        const data = await fetch(urlPot, peticion)
        const dato = await data.json();

        if (dato.message == "succes") {
            alert("registro correctamente")
            console.log(dato)
        } else {
            alert("Error")
            console.log(dato)
        }
    }*/

    const handleChangeF = (e) => {
        const formData = new FormData();
        //console.log(e.target.files[0].name)
        formData.append("img_profile", e.target.files[0]);
        //formData.append("name", "img_profile");
        //formData.append("fileName","img_profile");
        setForm(formData)
    }

    const pot = () => {
      /*  axios.post(urlPot, form, {
            'Authorization': 'token 7ca955805c6e026d07a364291ebb733e79e1f539'
            },).then(res => { // then print response status
            console.log('upload success')
        }).catch(err => { // then print response status
            console.log('Fail')
        })*/

        axios({
            url: urlPut,
            method: "PUT",
            headers: {
                // Add any auth token here

            },
            // Attaching the form data
            data: form,
        }).then((res) => {console.log(res.data)
        }).catch((err) => {  console.log(err.data)});

    }




    return(
        <div>
            <input  type= "file"  name="img_profile" onChange={handleChangeF}  />
            <button onClick={()=> pot()}>Actualizar</button>
        </div>
    )
}

export default Home;
