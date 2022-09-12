import React ,{useState} from 'react'
import {Box , Stack ,Typography} from '@mui/material'
const ExerciseVideos = ({exerciseVideo , name}) => {
   
  return (
    <Box p='20px' sx={{marginTop : {lg : '100px' , sm :'50px' , xs :'20px'}}}>
        <Typography variant='h3' sx ={{color :'#131429' , marginBottom :'25px'}}>
            Watch <span style={{color:'#DB175D' , textTransform :'capitalize'}}>{name}</span> Exercise Videos
        </Typography>
        <Stack justifyContent='flex-start' alignItems='center' flexWrap='wrap' sx={{flexDirection : {lg :'row'} , gap : {lg :'80px' , xs :'5px'}}}>
            {exerciseVideo.slice(0,8).map((item , index) => (
              
              <a 
              className='exercise-video' key={index} href={`http://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer">
              <img className='img' src={item.video.thumbnails[0].url}/>
              <Box sx={{alignSelf :'center'}}>
                <Typography variant='h6' color='#131429'>
                   Duration : {item.video.lengthText}
                </Typography>
              </Box>
              </a>
             
              
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos