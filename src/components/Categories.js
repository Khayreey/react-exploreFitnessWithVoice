import { Box } from '@mui/material'
import React, { useContext , useState , useEffect } from 'react'
import CategoryItem from './CategoryItem'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
const Categories = (props) => {
    
    const [lastOne , setLastOne] = useState(false);
    const [firstOne , setFirstOne] = useState(false);
    
    useEffect(()=>{
        if(!lastOne && !firstOne)
        {
            return
        }
        if(firstOne)
        {
            const timer = setTimeout(() => {
                setFirstOne(false)
                console.log(firstOne)
            }, 200);
    
        return ()=> {
            clearTimeout(timer)
        } 
        }
        else {
           
            const timer = setTimeout(() => {
                setLastOne(false)
                console.log(lastOne)
            }, 200);
    
        return ()=> {
            clearTimeout(timer)
        }
        }
           
    },[firstOne,lastOne])
    
    const RightArrow =  ()=>{
        const { isLastItemVisible ,scrollNext} = useContext(VisibilityContext)

     
        const clickNextHandler = ()=> {
            if(isLastItemVisible)
            {
                setLastOne(true)
                
            }
            scrollNext()
        }
        return (
            <ArrowCircleRightIcon onClick={()=> clickNextHandler()} className='right-arrow'></ArrowCircleRightIcon>
          
        )
    } 
    const LeftArrow = ()=>{
        
        const { isFirstItemVisible , scrollPrev } = useContext(VisibilityContext)
       
        const ckickPrevHandler = ()=> {

            if(isFirstItemVisible)
            {
                setFirstOne(true)
                
            }
            scrollPrev()
        }
        return (
            <ArrowCircleLeftIcon onClick={()=> ckickPrevHandler()} className='left-arrow'   ></ArrowCircleLeftIcon>
        )
    }  
  return (
    <Box sx={{ position: 'relative', width: '100%' , display :'flex' , justifyContent:'center' }}>
       <ScrollMenu setLastOne={setLastOne}  wrapperClassName={lastOne ? 'right' : firstOne ? 'left' : ''} LeftArrow={LeftArrow} RightArrow={RightArrow} >
          {props.data.map((item)=>{
                return (
                   <Box 
                  
                   key={item.id || item}
                   id={item.id || item}
                   title = {item.id || item}
                   sx={{padding : '1.2rem 0rem 1.5rem 0rem' , margin : '0 5rem 0 .5rem' , width : '100%'}}
                   >
                    <CategoryItem  setExercices={props.setExercices} item={item} setBodyPart={props.setBodyPart} bodyPart={props.bodyPart}></CategoryItem>
                   </Box>
                )
          })}
       </ScrollMenu>
    </Box>
  )
}

export default Categories