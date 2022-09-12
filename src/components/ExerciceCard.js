import React from 'react'
import { Link } from 'react-router-dom'
import {Stack , Button, Typography} from '@mui/material'
const ExerciceCard = (props) => {
  return (
    <Link to={`exercise/${props.ex.id}`} className='exercise-card'>
        <img src={props.ex.gifUrl} alt={props.ex.name} loading='lazy' width='70%' height = '70%'/>
        <Stack direction='row' justifyContent='space-around'>
            <Button className='bodyPart' sx={{color : '#fff' , backgroundColor : '#DB175D' , borderRadius : '50px' , textTransform :'capitalize' }}>
                {props.ex.bodyPart}</Button>
            <Button className='muscle' sx={{color : '#fff' , backgroundColor : '#131429' , borderRadius : '50px' , textTransform :'capitalize' }}>
                {props.ex.target}</Button>  
        </Stack>
        <Typography color='#131429'  fontWeight='800' textAlign='center' mt={2} fontSize='18px' textTransform='capitalize'>{props.ex.name}</Typography>  
    </Link>
  )
}

export default ExerciceCard