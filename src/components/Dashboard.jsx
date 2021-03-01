import React, { useState, useEffect } from "react"
import { Line, defaults } from 'react-chartjs-2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from './axios'
import { faStore, faChartLine, faCheckSquare, faExclamationTriangle, faArrowDown, faArrowUp, faGlobeAmericas, faClock } from '@fortawesome/free-solid-svg-icons'
import Mexico from '@svg-maps/mexico'
import { SVGMap } from 'react-svg-map'
import "react-svg-map/lib/index.css";

import Sidebar from './Sidebar'
import DashboardHeader from './DashboardHeader'
import './css/Dashboard.css'

defaults.global.defaultFontColor = '#fefefe'

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Ventas año actual',
      fill: false,
      fontColor: '#fefefe',
      backgroundColor: 'rgba(255,255,255,1)',
      borderColor: 'rgba(255,255,255,1)',
      pointBorderColor: 'rgba(255,255,255,1)',
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255,255,255,1)',
      pointHoverBorderColor: 'rgba(255,255,234,1)',
      pointRadius: 3,
      pointHitRadius: 10,
      data: [ 5, 4, 10, 9, 3, 12 ]
    },
    {
      label: 'Ventas año pasado',
      fill: false,
      fontColor: '#fefefe',
      backgroundColor: 'rgba(0,0,0,1)',
      borderColor: 'rgba(0,0,0,1)',
      pointBorderColor: 'rgba(0,0,0,1)',
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0,0,0,1)',
      pointHoverBorderColor: 'rgba(0,0,0,1)',
      pointRadius: 3,
      pointHitRadius: 10,
      data: [ 3, 6, 4, 13, 7, 15 ]
    }
  ]
}

const dataAdd = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
  datasets: [
    {
      label: 'Adquicisiones año actual',
      fill: false,
      fontColor: '#fefefe',
      backgroundColor: 'rgba(255,255,255,1)',
      borderColor: 'rgba(255,255,255,1)',
      pointBorderColor: 'rgba(255,255,255,1)',
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255,255,255,1)',
      pointHoverBorderColor: 'rgba(255,255,234,1)',
      pointRadius: 3,
      pointHitRadius: 10,
      data: [ 3, 4, 6, 5, 4, 7 ]
    },
    {
      label: 'Adquicisiones año pasado',
      fill: false,
      fontColor: '#fefefe',
      backgroundColor: 'rgba(0,0,0,1)',
      borderColor: 'rgba(0,0,0,1)',
      pointBorderColor: 'rgba(0,0,0,1)',
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0,0,0,1)',
      pointHoverBorderColor: 'rgba(0,0,0,1)',
      pointRadius: 3,
      pointHitRadius: 10,
      data: [ 1, 2, 4, 3, 7, 9 ]
    }
  ]
}

const Dashboard = () => {

  const [ estado, setEstado ] = useState('')
  const [ admin, setAdmin ] = useState({})
  const [ propiedades, setPropiedades ] = useState({})

  const showInfo = (e) => {
    setEstado(e.target.ariaLabel)
  }

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token')
      const response = await axios('/dashboard', {
        method: 'GET',
        headers: {
          authentication: token,
        }
      })
      setAdmin(response.data.admin)
      setPropiedades(response.data.propiedades)
    }

    getUser()
  }, [setAdmin, setPropiedades])

  return(
    <div className="dashboard">
      <Sidebar admin={ admin } />
      <DashboardHeader admin= { admin } />
      <div className="dashboard__main">
        <div className="dashboard__main--info">
          <div className="main__info">
            <div className="main__info--logo">
              <FontAwesomeIcon icon={faStore} />
            </div>
            <div className="main__info--title">Propiedades</div>
            <div className="main__info--cantidad">
              { propiedades && Object.keys(propiedades).length }
            </div>
            <div className="main__info--last"><small><FontAwesomeIcon icon={faArrowUp} /> 5 nuevas este mes</small></div>
          </div>
          <div className="main__info">
            <div className="main__info--logo">
              <FontAwesomeIcon icon={faCheckSquare} />
            </div>
            <div className="main__info--title">Ventas</div>
            <div className="main__info--cantidad">3</div>
            <div className="main__info--last"><small><FontAwesomeIcon icon={faArrowDown} /> 10% less sales</small></div>
          </div>
          <div className="main__info">
            <div className="main__info--logo">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <div className="main__info--title">En Proceso</div>
            <div className="main__info--cantidad">5</div>
            <div className="main__info--last"><small><FontAwesomeIcon icon={faArrowUp} /> 15% sales in proccess</small></div>
          </div>
          <div className="main__info">
            <div className="main__info--logo">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
            <div className="main__info--title">Perdidas</div>
            <div className="main__info--cantidad">1</div>
            <div className="main__info--last"><small><FontAwesomeIcon icon={faArrowDown} /> 5% less loose sales</small></div>
          </div>
        </div>
        <div className="dashboard__main--map">
          <div className="map__table--title">
            <div className="main__info--logo"><FontAwesomeIcon icon={faGlobeAmericas} /></div>
            <div className="table--title">
              Ventas y propiedades por locación
            </div>
          </div>
          <div className="main__map">
            <div className="main__map--info">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Estado</th>
                    <th>Casas</th>
                    <th>Vendidas</th>
                  </tr>
                  <tr>
                    <td>Aguascalientes</td>
                    <td>4</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Baja California</td>
                    <td>3</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Durango</td>
                    <td>8</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>EDOMEX</td>
                    <td>40</td>
                    <td>25</td>
                  </tr>
                  <tr>
                    <td>CDMX</td>
                    <td>45</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <td>Puebla</td>
                    <td>7</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>Queretaro</td>
                    <td>10</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="main__map--map">
              <div className="map__info">
                Estado: { estado !== '' && estado }
              </div>
              <SVGMap map={Mexico} onLocationMouseOver={showInfo} onLocationMouseOut={() => setEstado('')} />
            </div>
          </div>
        </div>
        <div className="main__grafic">
          <div className="main__grafic--container">
            <div className="dashboard__main--container">
              <div className="container-grafica">
                <Line data={data}/>
              </div>
            </div>
            <div className="grafic__container--title">
              Ventas Mensuales
            </div>
            <div className="grafic__container--rendimiento">
              <FontAwesomeIcon icon={faArrowDown} /> 20% menos ventas mensuales 
            </div>
            <div className="grafic__container--update">
              <FontAwesomeIcon icon={faClock} /> Actualizado hace 1 mes
            </div>
          </div>
          <div className="main__grafic--container">
            <div className="dashboard__main--container">
              <div className="container-grafica">
                <Line data={dataAdd}/>
              </div>
            </div>
            <div className="grafic__container--title">
              Adquicisiones Mensuales
            </div>
            <div className="grafic__container--rendimiento">
              <FontAwesomeIcon icon={faArrowUp} /> 40% de incremento en las adquicisiones mensuales
            </div>
            <div className="grafic__container--update">
              <FontAwesomeIcon icon={faClock} /> Actualizado hace 5 min
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
