import React from 'react'
import CardDev from '../CardDev/CardDev.jsx'
import { useState } from 'react'
import { useEffect } from 'react'
import getAllDevelopers from '../../services/dev.services'
import './DevList.css'


export default function DevList() {
  const [ devs, setDevs ] = useState([])

  const listDev = async() => {
    const devs = await getAllDevelopers()
    setDevs(devs)
  }

  const renderDevs = () => {
    return devs && devs.map((dev, i) => {
        return (
            <CardDev key={i}
            name={dev.name}
            image={dev.image}
            tech={dev.tech.map((e) => `#${e} `)}
            />
        )
    })
  }
  useEffect(() => { listDev() }, [devs])
  return (
    <div className='cardList'>
        {renderDevs()}
    </div>
  )
}