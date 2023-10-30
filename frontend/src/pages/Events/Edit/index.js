import React, { useEffect, useState } from 'react'
import Dashboard from '../../../layouts/Dashboard'
import './index.scss'
import NewEvent from '../../NewEvent'
import api from '../../../services/api'

const EditEventPage = () => {
    const [data, setData] = useState(null)
    const fetchEventData = async () => {
        // Obtener el id del evento de la ruta
        const eventId = window.location.pathname.split('/')[3]
        const response = await api.get(
            `/events/${eventId}`,
          )
        console.log(response)
        if(response.status === 200){
            setData(response.data)
        }
    }
    useEffect(() => {
        fetchEventData()
    }
    , [])
  return (
    <Dashboard>
        <NewEvent eventData={data}/>
    </Dashboard>
  )
}

export default EditEventPage