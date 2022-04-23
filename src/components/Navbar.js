  import React from 'react'
import { Link } from 'react-router-dom'
  import '../styles/Nav.css'

  const Navbar = () => {
      return (
          <header>              
              <nav>
                  <div id='titulo'>Concesionario Vehiculos</div>
                  <div>
                  <Link className='link' to="/">Listar</Link>
                  <Link className='link' to="/form">Crear</Link>
                </div>
              </nav>
          </header>
      )
  }

  export default Navbar