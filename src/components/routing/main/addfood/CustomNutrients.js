import {Card, Button, Row, Col, Checkbox } from "antd";
import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import DividedLayout from "../../../common/DivivedLayout"
import Calendar from "./Calendar"
import LeftColumn from "../../../common/LeftColumn";
import RightColumn from "../../../common/RightColumn ";
import MealPlanDisplay from "./MealPlanDisplay";
import SearchBar from "./SearchBar";
import axios from "axios";
import { Footer } from "antd/lib/layout/layout";
import Modal from 'react-modal';




function CustomNutrients(props) {

  const options = [
    { label: 'Calcium', value: "1087", key: "1087" },
    { label: 'Magnesium', value: "1090", key: "1090" },
    { label: 'Iron', value: "1089", key: "1089" },
  ];


  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    props.getSelectedNutrients();
  },[props.selectedDate]);

  useEffect(() => {
    getAllNutrients();
  },[]);
  


  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const getAllNutrients = () => {
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    try {axios
      .post("http://localhost:8080/getallnutrients")
      .then((response) => {
        console.log(response.data)})
    }catch (err) {
    console.log(err);
    }
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  return (
    <div className = "custom-nutrients">
    <Card>
    <Button type="primary" onClick={()=> {
      openModal();props.updateCheckedNutrients()}}>Add new nutient</Button>
        {props.selectedNutrients.map((nutrient) => (
          <Row key={nutrient.nutrientName}>
            {nutrient.nutrientName}, {nutrient.amount}
          </Row>
        ))}
        <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div>
        <Checkbox.Group options={options} value={props.checkedValues} onChange={props.onChange} />
        </div>
    <Button onClick={() =>{
      props.selectCustomNutrients(); 
      closeModal()}}
      >Select nutrients</Button>
      </Modal>
    </div>
    </Card>
    </div>
  );
}

export default CustomNutrients;
