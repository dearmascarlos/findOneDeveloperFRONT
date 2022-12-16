import React, { useEffect, useState } from "react"
import Header from "../components/Header/Header"
import Profile from "../components/Profile/Profile"
import { getDeveloperById } from "../services/dev.services"
import { useParams } from "react-router"
import { Chip } from '@mui/material'
import Footer from "../components/Footer/Footer"


function AccountPage() {
    const [dev, setDev] = useState({})

    const renderDev = async() => {
        const developer = await getDeveloperById(id)
        setDev(developer)
      }

    const { id } = useParams()

    useEffect(() => { renderDev() }, [])
    return (
      <div className="content-wrap">
        <Header />
        <Profile 
          id={dev.id}
          name={dev.name}
          email={dev.email}
          about={dev.about}
          image={dev.image}
          tech={dev.tech?.map((tech, i) => {
            return (
            <div key={i}><Chip label={'# ' + tech}/></div>
          )})}
        />
        <Footer/>
      </div>
    )
}

export default AccountPage