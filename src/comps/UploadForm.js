import React, {useState} from 'react'
import Progressbar from './Progressbar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)

        if (selected && types.includes(selected.type)){
          setFile(selected);
          setError("");
        }
        else{
          setFile(null);
          setError("Please select and image file (png or jpeg)");
        }
    }
  return (
    <form>
      <div className='center'>
      <label>
        <input type='file' onChange={changeHandler} className=''/>
        <span>+</span>
        </label>
        <div className='error'>
        {error && <div className='error'>{error}</div>}
        </div>
        {file && <div>{file.name}</div>}
        </div>
        {file && <Progressbar file = {file} setFile = {setFile}/>}
        
    </form>
  )
}

export default UploadForm