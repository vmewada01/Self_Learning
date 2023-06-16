import React, { useRef, useState } from 'react';

function Image() {
  const fileInputRef = useRef(null);
  const [imagePreviewURL, setImagePreviewURL] = useState(null);

  const handleImageChange = () => {
    const file = fileInputRef.current.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imagePreviewURL = e.target.result;
        setImagePreviewURL(imagePreviewURL);
      };

      reader.readAsDataURL(file);
    }
  };



  return (
    <div>
      <input type="file" onChange={handleImageChange} ref={fileInputRef} />
      {imagePreviewURL && (
        <img src={imagePreviewURL} alt="Preview" />
      )}
  
    </div>
  );
}

export default Image;
