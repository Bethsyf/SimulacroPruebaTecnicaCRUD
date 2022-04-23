import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { fileUpload } from '../helpers/fileUpload';
import { url } from '../helpers/url';
import '../styles/Form.css'

const Form = () => {

    const [vehiculos, setVehiculo] = useState({
        modelo: '',
        marca: '',
        año: '',
        placa: '',
        imagen: ''
    })
      
    const handleChanged = ({target}) => {
        setVehiculo({
          ...vehiculos,
          [target.name]: target.value
        })
    
      }

      const handleSubmit = (e) => {
       e.preventDefault();
       axios.post(url, vehiculos)
    .then(response => console.log(response))
    .catch((error)=> console.log(error))
      }

      const handleFileChange = (e) => {
        const file = e.target.files[0];
         fileUpload(file)
        .then(response => {
            vehiculos.imagen = response;           
        }).catch(error => {
            console.log(error.message)
        }) 
    }


    return(
        <main>
            <form class="form card" onSubmit={handleSubmit}>
                <h2 class="form_heading">Crear Vehiculo</h2>
                <hr/>
                <label>Modelo
                    <input class="input" type='text' name='modelo' id='modelo' onChange={handleChanged}/>
                </label>
                <label>Marca
                    <input class="input" type='text' name='marca' id='marca' onChange={handleChanged}/>
                </label>
                <label>Año
                    <input class="input" type='number' name='anio' id='anio' onChange={handleChanged}/>
                </label>
                <label>Placa
                    <input class="input" type='text' name='placa' id='placa' onChange={handleChanged}/>
                </label>
                <label>Imagen 
                    <input class="input" type="file" name='imagen' id='btnImagen' onChange={handleFileChange}  />
                </label>
                <button class='button' id='btnCrear'>Enviar</button>
            </form>            
        </main>
    )
}
export default Form