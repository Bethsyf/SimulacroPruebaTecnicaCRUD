import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../helpers/url'
import '../styles/List.css'

const List = () => {
    const [lista, setLista] = useState([])

  const getData = ()=> {
    axios.get(url)
    .then(response => {
      setLista(response.data);
    }).catch(error=> console.log(error))
  }

  const deleteData = (id)=> {
    axios.delete(`${url}/${id}`)
    .then(response => {
      alert("Vehiculo eliminado")
      getData()
    })
  }

  useEffect(() => {
    getData()
  }, [])
  


    return(
        <main>
            <table>
                <thead>
                    <tr>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Año</th>
                        <th>Placa</th>
                        <th>Imagen</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
              {
                lista.map(element =>(
                  <tr key={element.id}>
                    <td>{element.modelo}</td>
                    <td>{element.marca}</td>
                    <td>{element.año}</td>
                    <td>{element.placa}</td>
                    <td><img src={element.imagen} width="40" height="50" alt=""/></td>
                    <td><button onClick={()=>deleteData(element.id)}>Eliminar</button></td>
                  </tr>
                ))
              }
            </tbody>
            </table>
        </main>
    )
}

export default List;