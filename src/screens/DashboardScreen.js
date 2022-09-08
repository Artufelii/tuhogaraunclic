import React, { useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Mexico from '@svg-maps/mexico'
import { SVGMap } from 'react-svg-map'
import AdminLayout from '../components/AdminLayout'
import { validateToken, getInfo } from '../helpers';
import { AdminContext } from '../AdminContext'
import './css/DashboardScreen.css'
import 'react-svg-map/lib/index.css'

const DashboardScreen = () => {
  const history = useHistory()
  const { setUsuario } = useContext(AdminContext);
  const [properties, setProperties] = useState([]);
  const [datosTabla, setDatosTabla] = useState([]);
  const [mostrarButton, setMostrarButton] = useState(true);
  const agregarDatos = (propertie) => {
    setMostrarButton(false)
    if (datosTabla.find(x => x.state === propertie.adress.state)) {
      const nuevosDatos = datosTabla.map(x => x.state === propertie.adress.state
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        :x)
      return setDatosTabla(nuevosDatos)
    }
    return setDatosTabla(datosTabla.push({ state: propertie.adress.state, cantidad: 1 }))
  }

  useEffect(() => {
    validateToken(sessionStorage.getItem('token'))
      .then(response => {
        if (!response) {
          history.push('/admin/login')
        } 
        setUsuario(response)
      })
  }, [history, setUsuario])

  useEffect(() => {
    getInfo('properties', '')
      .then(response => {
        setProperties(response.data.propiedades)
      })
  }, []);

  return(
    <AdminLayout>
      <div className="dashboard">
        <div className="info">
          <div className="card">
            <p>Propiedades</p>
            <p>{properties.length}</p>
          </div>
          <div className="card">
            <p>En proceso de Venta</p>
            <p>{properties.filter(propertie => {
              return propertie.status === 'apartada'
            }).length}</p>
          </div>
          <div className="card">
            <p>Propiedades vendidas</p>
            <p>{properties.filter(propertie => {
              return propertie.status === 'vendida'
            }).length}</p>
          </div>
        </div>
        <div className="bigCard">
          <div style={{width: '45%'}} >
            <table style={{width: '100%', textAlign: 'center', border: '1px solid #000'}}>
              <tbody>
                <tr>
                  <td colSpan="2">Propiedades repartidas por estado</td>
                </tr>
                {mostrarButton 
                  ? <button onClick={() => properties.map(propertie => agregarDatos(propertie))}>Cargar Datos</button>
                  : null
                }
                
                <tr>
                  <th>Estado</th>
                  <th>Propiedades</th>
                </tr>
                {datosTabla.map(dato => 
                  <tr key={dato.state}>
                    <td>{dato.state}</td>
                    <td>{dato.cantidad}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div style={{width: '45%'}}><SVGMap map={ Mexico } /></div>
        </div>
        <div className="info">
          <div className="card">Ultimas Propiedades</div>
          <div className="card">Ultimas Propiedades</div>
          <div className="card">Ultimas Propiedades</div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default DashboardScreen
