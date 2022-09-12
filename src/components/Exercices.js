import React , {useEffect , useState} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box , Stack , Typography }  from '@mui/material'
import CircularProgress from "@mui/material/CircularProgress";
import ExerciceCard from './ExerciceCard'
import MicrophoneSearch from './MicrophoneSearch'
import {exGetOptions,fetchData} from '../utils/fetchData'
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
const Exercices = (props) => {
    const [currentPage , setCurrentPage] = useState(1)

    useEffect(()=> {
        props.setIsLoad(true)
        const getData =  async ()=> {
            
            if(!props.searchKeyWord)
               {
                if(props.bodyPart === 'all')
                {
                    const exData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exGetOptions) 
                    props.setExercices(exData)
                    
                }
                else {
                const exData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${props.bodyPart}`, exGetOptions) 
                props.setExercices(exData)  
                setCurrentPage(1)
                }
                
               }
               else {
                setCurrentPage(1)
                const exData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exGetOptions) 
                const searchedExercices = props.bodyPart === "all" ? 
                exData.filter((ex)=>
                ex.name.toLowerCase().includes(props.searchKeyWord)
                ||  ex.target.toLowerCase().includes(props.searchKeyWord)   
                ||  ex.equipment.toLowerCase().includes(props.searchKeyWord)   
                ||  ex.bodyPart.toLowerCase().includes(props.searchKeyWord))  
               :  exData.filter((ex)=>
               ex.name.toLowerCase().includes(props.searchKeyWord)
               ||  ex.target.toLowerCase().includes(props.searchKeyWord)   
               ||  ex.equipment.toLowerCase().includes(props.searchKeyWord)   
               ||  ex.bodyPart.toLowerCase().includes(props.searchKeyWord)).filter((e)=> e.bodyPart === props.bodyPart) 
              
               props.setExercices(searchedExercices)
               }  
        }
        getData()
        props.setIsLoad(false)
         
    } , [props.bodyPart , props.searchKeyWord])

    const paginationHandler=(event,value)=>{
        setCurrentPage(value)
        window.scrollTo({top : 1100 , behavior : 'smooth'})
    }

    //define the number of exercices per page 
    const numberOfExercicesPerPage = 9 
     // calculate the number of  pages (pagination take it in count property to display the number of pages)
    const numberOfPages = Math.ceil(props.exercices.length / numberOfExercicesPerPage)
    // calculate the last index of current page 
    const lastExercsiceIndex = numberOfExercicesPerPage * currentPage 
    // calculate the first index of current page 
    const firstExerciseIndex = lastExercsiceIndex - numberOfExercicesPerPage 
    // calculate the shown exercise according to first and last index and currentPage
    const ExercicesOfCurrentPage = props.exercices.slice(firstExerciseIndex , lastExercsiceIndex)
    // and instead of map over all exercices map over  ExercicesOfCurrentPage

    const deleteSearchHandler = ()=>{
        props.setSearchKeyWord(()=>{
            return ''
        })
    }
    return (
        <Box id='exercices' mt='50px' p='15px' position='relative'>
            <Stack alignItems='center'>

              {props.searchKeyWord && 
               <Box  sx={{ padding : '10px 20px 10px 20px' ,backgroundColor : 'rgba(280,280,280,.8)' ,borderRadius:'20px', mb:'50px', color:'#131429' ,boxShadow:'3px 3px 5px gray' , display:'flex', justifyContent:'space-between' ,alignItems:'center',width : '80%' }}>
               <Typography variant='h4' 
               fontWeight='700'
                > 
               {props.exercices.length > 0 ?
                `Results : "${props.searchKeyWord}"` :  props.noExercisesFound &&  `No Result Found : "${props.searchKeyWord}"`}
               </Typography>
               <DeleteSweepIcon onClick={deleteSearchHandler} sx={{color : '#131429'  , fontSize:'40px' , cursor :'pointer'}}></DeleteSweepIcon>
               </Box>
              } 
            
            {props.isLoad && <CircularProgress></CircularProgress>}
            </Stack>
            <Stack direction='row' sx={{gap : '80px'}} flexWrap='wrap' justifyContent='center'>
                {ExercicesOfCurrentPage.map((ex , index)=>{
                    return(
                        <ExerciceCard ex={ex} key={index}></ExerciceCard>
                    )
                })}
            </Stack>
            
            <Stack direction='row' justifyContent='center' mt='50px'>
               {props.exercices.length > 9 &&
                (<Pagination color="primary" variant="outlined" size="large" defaultPage={1}
                page={currentPage}
                onChange={(e,v)=> paginationHandler(e,v)}
                count={numberOfPages}
                />)
               }
            </Stack>
            
            <MicrophoneSearch 
            searchHandler={props.searchHandler}
            setSearchKeyWord={props.setSearchKeyWord} setExercices={props.setExercices} setIsLoad={props.setIsLoad} setNoExercisesFound={props.setNoExercisesFound}></MicrophoneSearch>
        </Box>
    )
}

export default Exercices