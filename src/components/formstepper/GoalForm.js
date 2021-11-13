import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
    Form,
    Radio,
} from 'antd';
import OptionCard from './OptionCard';

function GoalForm(props){


    return (
        <div className="goal-form">
            <Form
                layout="horizontal">
                <h1>Describe what is your goal.</h1>
                <Form.Item>
                    <Radio.Group
                        name="goal"
                        onChange={props.handleInput}>
                        <Radio value="1.3"><OptionCard title="Gain Muscle" description="Gain muscle - you need exercise as well :)" picturePath="https://www.precisionnutrition.com/hand_portion_calculator/assets/images/speedo3.svg"/></Radio>
                        <Radio value="1"><OptionCard title="Maintenance" description="Maintanin your body weight." picturePath="https://www.precisionnutrition.com/hand_portion_calculator/assets/images/speedo2.svg"/></Radio>
                        <Radio value="0.8"><OptionCard title="Fat Loss" description="Loose around 0.45 kg a week." picturePath="https://www.precisionnutrition.com/hand_portion_calculator/assets/images/speedo1.svg"/></Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </div>
    );
};

export default GoalForm;