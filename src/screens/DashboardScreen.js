import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Mexico from '@svg-maps/mexico'
import { SVGMap } from 'react-svg-map'
import AdminLayout from '../components/AdminLayout'
import { validateToken } from '../helpers';
import { AdminContext } from '../AdminContext'

import './css/DashboardScreen.css'
import 'react-svg-map/lib/index.css'

const DashboardScreen = () => {
  const history = useHistory()
  const { setUsuario } = useContext(AdminContext);
  
  useEffect(() => {
    validateToken(sessionStorage.getItem('token'))
      .then(response => {
        if (!response) {
          history.push('/admin/login')
        } 
        setUsuario(response)
      })
  }, [])

  return(
    <AdminLayout>
      <div className="dashboard">
        <div className="info">
          <div className="card">Propiedades</div>
          <div className="card">En proceso de Venta</div>
          <div className="card">Propiedades antiguas</div>
        </div>
        <div className="bigCard">
          <div style={{width: '45%'}}>
            <table style={{width: '100%', textAlign: 'center', border: '1px solid #000'}}>
              <tbody>
                <tr>
                  <td colSpan="2">Propiedades repartidas por estado</td>
                </tr>
                <tr>
                  <th>Estado</th>
                  <th>Propiedades</th>
                </tr>
                <tr>
                  <td>Aguascalientes</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>CDMX</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>Durango</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>EDOMEX</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Jalisco</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Puebla</td>
                  <td>4</td>
                </tr>
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
