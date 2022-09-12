import React from 'react'
import {Stack , Button , Typography} from '@mui/material'
import Body from '../assets/icons/b.png'
import Target from '../assets/icons/t.png'
import Equip from '../assets/icons/q.png'
const Detail = ({exerciseDetail}) => {
    const extraDetail = [
        {
          icon: Body,
          name: exerciseDetail.bodyPart,
        },
        {
          icon: Target,
          name: exerciseDetail.target,
        },
        {
          icon: Equip,
          name: exerciseDetail.equipment,
        },
      ];
  return (
    <Stack gap='80px' sx={{flexDirection : {lg : 'row'} , p :'20px' , alignItems:'center'  , width :'100%' , height:'100vh' }} >
      <img src ={exerciseDetail.gifUrl} alt ={exerciseDetail.name} loading='lazy' className='detail-image'/>
      <Stack gap='35px'>
        <Typography textTransform='capitalize' variant='h3' sx={{color :'rgb(19, 20, 41)' , fontWeight :'700'}}>
            {exerciseDetail.name}
        </Typography>
        <Typography textTransform='capitalize' variant='h6' sx={{color :'rgb(19, 20, 41)' , fontWeight :'600'}}>
           The {exerciseDetail.name} is one of best exercises that focus on {exerciseDetail.bodyPart} and target {exerciseDetail.target} muscle
        </Typography>
        {extraDetail?.map((item , index) => (
          <Stack key={index} direction="row" gap="10px" alignItems="center">
            <Button  sx={{ background: '#f4c2c2', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon}  style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography  textTransform="capitalize" sx={{ fontSize: { lg: '26px', xs: '20px' , color :'rgb(19, 20, 41)' }}}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail