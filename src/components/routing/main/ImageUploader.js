import React, { useState, useRef, useEffect } from "react";
import axios from "axios";


const ImageUploader = () => {


  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = useRef(null)
  const [profileImage, setProfileImage] = useState([]);

  const onFileChange = (event) => {
    console.log(event.target.files[0])
    setSelectedFile(event.target.files[0]);
  };


  const uploadProfilePicture = () => {
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    const formData = new FormData();
    console.log(formData)
    formData.append("name", name);
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:8080/addprofilepicture",formData, config)
      .then((response) => {
        console.log(response)
        setProfileImage(response.data)
      })
      .catch();
  };
  

  return (
    <div className="App">
      <div>
                <input text="x" type="file" onChange={onFileChange} />
                <button onClick={uploadProfilePicture}>
                  Upload!
                </button>
                <img src={profileImage} alt="Logo" />;
            </div>
    </div>
  );

};

export default ImageUploader;