import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // Estado para guardar la lista de cursos que viene del backend
  const [cursos, setCursos] = useState([])
  // Estado para indicar si todavía estamos cargando los datos
  const [loading, setLoading] = useState(true)
  // Estado para guardar un posible mensaje de error
  const [error, setError] = useState(null)

  // useEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // Función asíncrona que llama al servicio backend usando Axios
    const fetchCursos = async () => {
      try {
        // Hacemos la petición GET al endpoint de Express, pasando por el proxy de Vite
        const response = await axios.get('/api/cursos/lista')
        // Guardamos los datos en el estado
        setCursos(response.data)
      } catch (err) {
        // Si hay error en la petición, guardamos un mensaje de error
        console.error(err)
        setError('Error al cargar los datos')
      } finally {
        // Sea éxito o error, dejamos de estar en modo "cargando"
        setLoading(false)
      }
    }

    fetchCursos()
  }, [])

  if (loading) {
    return (
      <div className="app-container">
        <h1>Listado de Cursos</h1>
        <p>Cargando datos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app-container">
        <h1>Listado de Cursos</h1>
        <p className="error">{error}</p>
      </div>
    )
  }

  return (
    <div className="app-container">
      <h1>Listado de Cursos</h1>

      <table className="courses-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Ciclo / Sección</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso, index) => (
            <tr key={`${curso.codigo}-${index}`}>
              <td>{index + 1}</td>
              <td>{curso.codigo}</td>
              <td>{curso.nombre}</td>
              <td>{curso.apellido}</td>
              <td>{curso.edad}</td>
              <td>{curso.ciclo_Seccion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="info">Mostrando {cursos.length} registros.</p>
    </div>
  )
}

export default App
