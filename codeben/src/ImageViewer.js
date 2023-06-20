import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ImageViewer = () => {
    const [imagePath, setImagePath] = useState('');

    const loadData = async()=>{
        const response = await axios.get('http://localhost:8000/api/get');
        setImagePath(response.data)
    }
    useEffect(()=>{
        loadData();
    },[]);
  return (
    <div>
        {imagePath && <img src={imagePath} alt='uploaded'/>}
    </div>
  )
}

export default ImageViewer