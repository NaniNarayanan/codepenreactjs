import React, { useState } from 'react'
import axios from 'axios';

const ImageUpload = () => {
    const [image, setImage] = useState(null);

    const handleImageChange=(e) =>{
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        try{
            const response = axios.post('http://localhost:8000/api/upload',image)
            .then(()=>{
                setImage(response.data)
            })
        }catch(err){
            alert(err)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='file' onChange={handleImageChange}/>
            <button type='submit'>upload</button>
        </form>
    </div>
  )
}

export default ImageUpload