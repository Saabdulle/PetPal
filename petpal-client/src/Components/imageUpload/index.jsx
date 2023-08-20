import React, { useState, useEffect } from 'react'

const ImageUpload = ({handleUpload, setIsIcon, setIsPicture, handleLogoUpload, upload, logo}) => {

    const [fileInputState, setFileInputState] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const handleFileInputChange = (e) => {
setIsPicture(true)
        const file = e.target.files[0];
        previewFile(file);
        // setSelectedFile(file);
        // setFileInputState(e.target.value);

      };
    
      const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSource(reader.result);
        };
      };
    
     
    const handleLogoInputChange = (e) => {
      setIsIcon(true)
              const file = e.target.files[0];
              previewFile(file);
              // setSelectedFile(file);
              // setFileInputState(e.target.value);
      
            };
    
    //   const uploadImage = async (base64EncodedImage) => {
    //     try {
    //       await fetch("http://localhost:5000/pets/upload", {
    //         method: "POST",
    //         body: JSON.stringify({ data: base64EncodedImage }),
    //         headers: {
    //           "Content-type": "application/json",
    //           // "Access-Control-Allow-Origin": "*",
    //           // "Access-Control-Allow-Headers":
    //           //   "Origin, X-Requested-With, Content-Type, Accept",
    //         },
    //         // mode: "cors",
    //       });
    //       setFileInputState("");
    //       setPreviewSource("");
    //       setSuccessMsg("Image uploaded successfully");
    //     } catch (err) {
    //       console.error(err);
    //       setErrMsg("Something went wrong!");
    //     }
    //   };
    



  return (
    <div>
      {upload? <div>
      <button className='upload-btn'><label className='upload-lbl' htmlFor="fileInput">
        Choose photo
          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
        </label></button>
<button className='upload-btn' onClick={()=>handleUpload()}>Upload</button></div> 
:logo? <div><button className='upload-btn'><label className='upload-lbl' htmlFor="fileInput">
Choose logo
  <input
    id="fileInput"
    type="file"
    name="image"
    onChange={handleLogoInputChange}
    value={fileInputState}
    className="form-input"
  />
</label></button>
<button className='upload-btn' onClick={()=>handleLogoUpload()}>Upload</button> 
</div>
:'' }
        
    </div>
  )
}

export default ImageUpload

