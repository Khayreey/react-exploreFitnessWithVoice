import React , {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import { fetchData , exGetOptions , youtubeGetOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'

const ExerciseDetails = () => {
    const [exerciseDetail , setExerciseDetail] = useState({})
    const [exerciseVideo , setExerciseVideo] = useState([])
    const { id } = useParams()
    useEffect(()=> {
        const fetchChooseExercise = async ()=> {
            const exerciseDetail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}` , exGetOptions) 
            setExerciseDetail(exerciseDetail)

            const videoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`,
            youtubeGetOptions)
            setExerciseVideo(videoData.contents)
            console.log(videoData)
        }
        fetchChooseExercise()
    } ,
    [id])
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
            
        </Box>
    )
}

export default ExerciseDetails