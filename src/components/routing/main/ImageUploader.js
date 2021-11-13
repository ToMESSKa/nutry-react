import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../../../static/css/ImageUploader.css";
import DefaultProfileImage from "../../../static/defaultprofileimage.jpg";
import {Card, Space, Col, Row, Button, Divider} from "antd";


const ImageUploader = () => {


  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [profileImage, setProfileImage] = useState(DefaultProfileImage);
  const [hidden, SetHidden] = React.useState(false);
  const endpoint = process.env.REACT_APP_API_ENDPOINT;

  useEffect(() => {
    loadProfilePicture();
  },[]);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };


  const loadProfilePicture= () => {
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    axios.post(endpoint + "/getprofilepicture","text", config)
    .then((response)=> {
      if (response.data !== ""){
        setProfileImage(endpoint + "/profileimages/" + response.data)
      }
  })}


  const uploadProfilePicture = () => {
    if (selectedFile!== null){
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    const formData = new FormData();
    console.log(formData)
    formData.append("name", name);
    formData.append("file", selectedFile);
    axios
      .post(endpoint + "/addprofilepicture",formData, config)
      .then((response) => { axios.post(endpoint +  "/getprofilepicture","text", config).then((response)=> {
        setProfileImage(endpoint + "/profileimages/" + response.data)
        SetHidden(false)
      })})
    }
  };

  const browseButton={
    display: "none"
  }

  const selectImage= useRef(null);
 

  const handleClick = (e) => {
    console.log("hey")
    e.preventDefault();
    selectImage.current.click()
 }


  return (
    <div className="image-uploader" style={{justifyContent:"center"}}>
      <div style={{justifyContent:"center"}}>
        <Col span={6}  className="uploader-col">
          <div style={{height:"2rem"}}></div>
        <Row justify="center" >
          <img className="profile-image" src={profileImage} alt="profielpic" />
        </Row>
          <div style={{height:"0.5rem"}}></div>
        <Row justify="center" >
        <Button hidden={hidden} type="primary" onClick={() => SetHidden(true)} >Update profile picture</Button>
        </Row>
        {hidden === false ?
        <Row justify="center" >
          </Row> : 
          <div>
          <Row justify="center" >
          <input ref={selectImage} type="file" style={browseButton}  onChange={onFileChange} />
          <Button onClick={(event) => handleClick(event)}>Select file...</Button>
        </Row>
            <div style={{height:"0.5rem"}}></div>
        <Row justify="center">
          <Button onClick={uploadProfilePicture} type="primary">Upload!</Button>
        </Row>
        </div>
      }
          <div style={{height:"2rem"}}></div>
        </Col>
      </div>
    </div>
  );
};

export default ImageUploader;