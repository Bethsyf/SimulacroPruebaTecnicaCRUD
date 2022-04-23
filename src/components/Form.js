import '../styles/Form.css'

const Form = () => {

    return(
        <main>
            <form class="form card">
                <h2 class="form_heading">Crear Vehiculo</h2>
                <hr/>
                <label>Modelo
                    <input class="input" type='text' name='modelo' id='modelo'/>
                </label>
                <label>Marca
                    <input class="input" type='text' name='marca' id='marca'/>
                </label>
                <label>Año
                    <input class="input" type='number' name='anio' id='anio'/>
                </label>
                <label>Placa
                    <input class="input" type='text' name='placa' id='placa'/>
                </label>
                <label>Imagen
                    <input class="input" type='file' name='imagen' id='btnImagen'/>
                </label>
                <button class='button' id='btnCrear'>Enviar</button>
            </form>            
        </main>
    )
}
export default Form