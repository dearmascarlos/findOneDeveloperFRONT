import React, { useEffect, useState } from 'react'
import { Card, CardMedia, Typography, Chip, Stack } from '@mui/material'
import { teal } from '@mui/material/colors';  
import './ProjectProfile.css'

function ProjectProfile({project}) {  
  
  const test = project
  console.log(test)
  // const renderTech = () => {
  //   project.tech.map((tech, i) => {
  //     return <Stack key={i} direction="row" spacing={1}><Chip label={'# ' + tech}/></Stack>})
  // }
  //   useEffect(() => renderTech(), [])
    
  return (
    <Card className='project-box' sx={{ maxWidth: 1400, height: 750, color:teal[400]}}>
      <div id='header-box'>
        <div id='title-team'>
          <div id='title-box'>
            <div className="profile-title">
            <Typography variant="h3" >PROFILE</Typography>
            </div>
              <Typography className='tx-title' variant="body2" align="center" color="text.primary">
                Title
              </Typography>
              <Chip label={test.title} />
              <Typography className='tx-title' variant="body2" align="center" color="text.primary">
                Type
              </Typography>
              <Chip label={test.type} />
          </div>
          <div id='team-box'>
              <Typography className='tx-title' variant="body2" align="center" color="text.primary">
                Team
              </Typography>
              <div className='bg-text'>
                <Chip label="Himar" />
                <Chip label="Carlos" />
                <Chip label="Andrew" />
              </div>
          </div>
        </div>
          <div id='img-box'>
            <CardMedia
              className='project-img'
              component="img"
              src={require("../../assets/projectExample.png")}
              alt="Image Dev"
            />
          </div>
      </div>    
        <div id='container-box'>
          <div id='description-box'>
            <Typography className='tx-title' variant="body2" align="center" color="text.primary">
              Description
            </Typography>
            <div className='bg-text'>
              <Typography className='tx-description' variant="body2" align="center">
                kjsdfhkljsdhdfkljhsd jkdsfhkldsjhflkjdshkjlfdskl dskjfhkjfdshlkdfsjhjlkdfshfdsj dsfassgdsgds aggsdkjadhflkdjhfj jadkfhaklshfalkjdf ajkdkfhlkjsfhlkfjsdf
              </Typography>
            </div>
          </div> 
          <div id='tech-box'>
            <Typography className='tx-title' variant="body2" align="center" color="text.primary">
              Tech
            </Typography>
            <div className='bg-text'>
              {/* {renderTech()} */}
            </div>
          </div>
        </div>
        <div className=''>
          <Typography className=''>
           Link
          </Typography>
        </div>
    </Card>
  )
}

export default ProjectProfile