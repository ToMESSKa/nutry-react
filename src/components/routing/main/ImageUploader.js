import React, { useState, useRef } from "react";
import FileUploader from "./FileUploader";
import axios from "axios";


const ImageUploader = () => {


  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInput = useRef(null)

  const onFileChange = (event) => {
    console.log(event.target.files[0])
    setSelectedFile(event.target.files[0]);
  };

  const submitForm = () => {
    console.log("hi")
    const formData = new FormData();
    console.log(formData)
    formData.append("name", name);
    formData.append("file", selectedFile);
    axios
      .post("http://localhost:8080/addprofilepicture", formData)
      .then((res) => {
        alert("File Upload success");
      })
      .catch((err) => alert("File Upload Error"));
  };
  

  return (
    <div className="App">
      <div>
                <input text="x" type="file" onChange={onFileChange} />
                <button onClick={submitForm}>
                  Upload!
                </button>
            </div>
    </div>
  );

};

export default ImageUploader;