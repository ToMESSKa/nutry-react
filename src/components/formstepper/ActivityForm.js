import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './ActivityForm.css'
import {
  Form,
  Radio,
} from 'antd';
import OptionCard from './OptionCard';

function ActivityForm(props){

  return (
      <div className="activity-form">
        <Form
            layout="horizontal">
          <h1>Describe how active you are each day.</h1>
          <Form.Item >
            <Radio.Group
                name="activity"
                onChange={props.handleInput}>
              <Radio value="1.1"><OptionCard title="Very Light" description="Sitting most of the day (example: desk job)." picturePath="https://www.precisionnutrition.com/hand_portion_calculator/assets/images/speedo1.svg"/></Radio>
              <Radio value="1.3"><OptionCard title="Light" description="A mix of sitting, standing, and light activity (example: teacher)." picturePath="https://www.precisionnutrition.com/hand_portion_calculator/assets/images/speedo2.svg"/></Radio>
              <Radio value="1.6"><OptionCard title="Moderate" description="Continuous gentle to moderate activity (example: restaurant server)." picturePath="https://www.precisionnutrition.com/hand_portion_calculator/assets/images/speedo3.svg"/></Radio>
              <Radio value="1.9"><OptionCard title="Heavy" description="Strenuous activity throughout the day (example: construction work)." picturePath="https://www.precisionnutrition.com/hand_portion_calculator/assets/images/speedo4.svg"/></Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
  );
};

export default ActivityForm;