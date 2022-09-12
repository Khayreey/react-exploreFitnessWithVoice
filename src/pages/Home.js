import React , {useState} from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercices from '../components/SearchExercices'
import Exercices from '../components/Exercices'
import { exGetOptions , fetchData } from '../utils/fetchData'

const Home = () => {

    const [exercices , setExercices] = useState([])
    const [bodyPart , setBodyPart] = useState('all')
    const [noExercisesFound , setNoExercisesFound] = useState(false)
    const [isLoad , setIsLoad] = useState(false)
    const [searchKeyWord , setSearchKeyWord] = useState('')
    const [searchError,setSearchError] = useState(false)
    
    const searchHandler = async ( searchTerm  , setSearchTerm  )=> {
        if(searchTerm)
        {
            setNoExercisesFound(false)   
            setIsLoad(true)
            setSearchTerm(()=>{
                return ''
            })
            window.scrollTo({top : 1100 , behavior : 'smooth'})
            let searchedExercices
            const exData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exGetOptions)   
            searchedExercices = exData.filter((ex)=>
            ex.name.toLowerCase().includes(searchTerm)
            ||  ex.target.toLowerCase().includes(searchTerm)   
            ||  ex.equipment.toLowerCase().includes(searchTerm)   
            ||  ex.bodyPart.toLowerCase().includes(searchTerm))  
             
            if(searchedExercices.length ===0)
            {
                setNoExercisesFound(true)   
            }     
           setExercices(searchedExercices)
           
           setSearchKeyWord(()=>{
            return searchTerm
           })
           setIsLoad(false)
        }
        else {
            setSearchError(true)
        }
    }

    return (
        <Box>
            <HeroBanner />
            <SearchExercices  
             searchError={searchError} setSearchError={setSearchError}
             searchHandler={searchHandler}
             setSearchKeyWord={setSearchKeyWord} isLoad={isLoad} setIsLoad={setIsLoad} setExercices={setExercices} bodyPart={bodyPart} setBodyPart={setBodyPart} setNoExercisesFound={setNoExercisesFound}/>
            <Exercices
            searchHandler={searchHandler}
            searchKeyWord={searchKeyWord} setSearchKeyWord={setSearchKeyWord} isLoad={isLoad} setIsLoad={setIsLoad} noExercisesFound={noExercisesFound} setNoExercisesFound={setNoExercisesFound} setExercices={setExercices} bodyPart={bodyPart} exercices={exercices}/>
        </Box>
    )
}
export default Home