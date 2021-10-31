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


  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    props.getSelectedNutrients();
  },[props.selectedDate]);
  
  useEffect(() => {
    props.getSelectedNutrients();
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


  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  // function onChange(checkedValues) {
  //   props.setSelectedNutrients(checkedValues)
  // }

  // const getSelectedNutrients = () =>{
  //   const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
  //   const date = { date: props.selectedDate };
  //   axios
  //     .post("http://localhost:8080/getselectednutrients", date, config)
  //     .then((response) => {
  //       setSelectedNutrients(response.data)
  //     })
  //   }

  // const selectCustomNutrients = () => {
  //   const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
  //   console.log(selectedNutrients);
  //   let selected = []
  //   for (let nutrient of selectedNutrients){
  //     let dict = {};
  //     dict["nutrientID"] = nutrient;
  //     selected.push(dict)
  //   }
  //   const selectedNutrientList ={selectedNutrientList : selected};
  //   const date = { date: props.selectedDate }
  //   try {
  //     axios
  //       .post("http://localhost:8080/select-custom-nutrient", selectedNutrientList, config)
  //       .then((response) => {
  //         axios
  //           .post("http://localhost:8080/getselectednutrients", date, config)
  //           .then((response) => {
  //             setSelectedNutrients(response.data)
  //             console.log(response.data);
              
  //           })}
  //       )} catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <div className = "custom-nutrients">
    <Card>
    <Button type="primary" onClick={openModal}>Add new nutient</Button>
        {props.selectedNutrients.map((nutrient) => (
          <Row>
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
      >
        <Checkbox.Group style={{ width: '100%' }} onChange={props.onChange}>
        <Row>
        <Checkbox value="1087">Calcium</Checkbox>
        </Row>
        <Row>
        <Checkbox value="1090">Magnesium</Checkbox>
        </Row>
        <Row>
        <Checkbox value="1089">Iron</Checkbox>
        </Row>
    <Button onClick={() =>{
      props.selectCustomNutrients(); 
      closeModal()}}
      >Select nutrients</Button>
  </Checkbox.Group>,
      </Modal>
    </div>
    </Card>
    </div>
  );
}

export default CustomNutrients;
