import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { uploadImageRequest, uploadImageSuccess } from "../action/imgAction";

function ImageUpload() {
   const [image, setImage] = useState(null);
   const dispatch = useDispatch()

   const handleImageChange = (event) =>{
    setImage(event.target.files[0])
   }

   const handleImageUpload = () => {
    dispatch(uploadImageRequest())

    setTimeout(() => {
        const imageUrl = ''
        dispatch(uploadImageSuccess(imageUrl))
    }, 2000);
   }
    return (
        <div>
           <input type="file" onChange={handleImageChange} />
           <button onClick={handleImageUpload}>Upload image</button>
        </div>
    )
}

export default ImageUpload;