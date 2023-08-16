import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MenuCard from './MenuCard'
import { MenuData } from '../../DB/MenuData'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Box id='Menu'>
    <Typography component='h6' variant='h6'>Specialties</Typography>
    <Typography component='h5' variant='h4'>Our Menu</Typography>
    <Box className="menu-container">
    {
      MenuData.length ? MenuData.map((item,index)=><MenuCard key={index} MenuItem={item}/>) : <Typography component='p'> No Items</Typography>
    }
    </Box>
    <Typography sx={{textAlign:'center',padding:5}}>
      <Link to='/menu'>
      <Button color='error' variant='outlined'>View Menu</Button>
      </Link>
    </Typography>
  </Box>
  )
}

export default Menu