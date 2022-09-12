import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/gym.png'

function Navbar() {
    return (
        
       
        <Stack
            direction='row'
            justifyContent='space-around'
            sx={{ gap: { sm: '122px', xs: '40px' }, height : '4.5rem', alignItems : 'center',justifyContent: 'none', px: '20px' , backgroundColor :'#0e1321' }}
        >  
            <Link to='/'>
                <img src={Logo} alt='gymLogo' style={{ width: '64px', height: '64px'  }} ></img>
            </Link>
            <Stack
                direction='row'
                gap='40px'
                fontSize='24px'
                alignItems='space-between'
            >
                <Link to='/' style={{ textDecoration: 'none', color: '#fff', borderBottom: '3px solid #e94c84' }}>Home</Link>
                <a href='#exercices' style={{ textDecoration: 'none', color: '#fff' }}>  Exercices</a>
            </Stack>
        </Stack>
       
    )
}
export default Navbar