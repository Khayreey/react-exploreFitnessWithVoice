import React from 'react'
import {Stack , Typography } from '@mui/material'
import GymIcon from '../assets/icons/cat.png'

const CategoryItem = (props) => {

  const selectCategoryHandler = ()=> {
    props.setBodyPart(props.item)
    window.scrollTo({top: 1200 , left : 100 , behavior: 'smooth'})
    // props.setExercices((prev)=>{
    //  return prev.filter((ex)=> ex.bodyPart.toLowerCase() === props.item.toLowerCase())
    // })
    
  }
  return (
    <Stack  type='button' alignItems='center'   justifyContent='space-around' className='bodyPart-card'
    sx={ {
       
        padding :'.5rem' ,
        backgroundColor : props.bodyPart === props.item  ? '#131429' : '#fff' ,
        width : '130px',
        height :'130px',
        cursor : 'pointer',
        borderRadius: '50%' 
    }     
    }
    onClick={selectCategoryHandler}
    >
        <img src={GymIcon} alt='category' style={{width : '65px' , height : '65px'}}/>
        <Typography  fontWeight='700' textTransform='capitalize' color={props.bodyPart === props.item  ? '#fff' : '#131429'}>{props.item}</Typography>
    </Stack>
  )
}

export default CategoryItem