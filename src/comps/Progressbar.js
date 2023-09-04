import React, {useEffect} from 'react'
import UseStorage from '../hooks/UseStorage'

const Progressbar = ({file, setFile}) => {
    const {url, progress} = UseStorage(file);
    console.log(progress, url)

    useEffect(()=>{
      if(url){
        setFile(null);
      }
    },[url, setFile])

  return (
    <div className='progress-bar' style={{width: progress + '%'}}></div>
  )
} //stopped at 38:52

export default Progressbar