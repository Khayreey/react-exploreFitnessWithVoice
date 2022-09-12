import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import fitnessBanner from '../assets/images/fit.png'
const HeroBanner = () => {
    return (
        <Box className='hero' sx={{
            pt: { lg: '100px', xs: '20px' },
            backgroundColor :'#89cff0' , height : '550px'

        }}
            position='relative' p='20px' >
            
            <Typography  className='hh' mt={6}  fontWeight='900' color='#89cff0' sx={{ fontSize: { lg: '42px', sm: '30px', xs: '26px' } }}>The Worst Workout ,<br /> This You Dont Do</Typography>
            <Typography  mt={3} mb={3} fontSize='32px' color='#131429' fontWeight='600'
            >Explore Now The Exercices</Typography>
            <Button
                
                sx={{ backgroundColor: '#131429' }}
                href='#exercices' variant="contained" color="primary" endIcon={<SendIcon />}>Explore Exercices</Button>
            <img src={fitnessBanner} className='hero-banner-img'></img>
        </Box >
    )
}

export default HeroBanner