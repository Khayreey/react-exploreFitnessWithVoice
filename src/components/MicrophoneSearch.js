import React , {useEffect , useState} from 'react'
import micro from '../assets/icons/m.png'
import animated from '../assets/icons/m.gif'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {exGetOptions,fetchData} from '../utils/fetchData'
const MicrophoneSearch = ( {searchHandler} ) => {
    const [search , setSearch] = useState('')
    useEffect( ()=>{
    // avoid to call api when component re-evaluate or first time render
    if(!search)
    {
        return
    }
    else {
       
        searchHandler(search , setSearch)
       
    }
  },[search])

    // things that you expect from user and each one has its callback 

    // const commands = [
    //     {
    //       command: 'reset',
    //       callback: () => resetTranscript()
    //     },
        // {
        //   command: 'shut up',
        //   callback: () => setMessage('I wasn\'t talking.')
        // },
        // {
        //   command: 'Hello',
        //   callback: () => setMessage('Hi there!')
        // },
      //]
      const {
        transcript,
        interimTranscript,
        finalTranscript,
        resetTranscript,
        listening,
      } = useSpeechRecognition();
     
      useEffect(() => {
        if (finalTranscript !== '') {
          console.log('Got final result:', finalTranscript);
        }
        if(transcript.length > 0)
        {
            setSearch(transcript)
        }
      }, [interimTranscript, finalTranscript , transcript]);
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      }
     
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
      }
      const listenContinuously = () => {
        SpeechRecognition.startListening({
          language: 'en-GB',
        });
      };
  return (
    <>
    {listening ? <img src={animated} alt='micOn' onClick={SpeechRecognition.stopListening} className='microphone'/>
    : <img src={micro} alt='mic' onClick={listenContinuously} className='microphone'/>
  }
  </>
  )
}

export default MicrophoneSearch