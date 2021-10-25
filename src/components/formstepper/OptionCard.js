import { Card } from 'antd';

const { Meta } = Card;

const OptionCard = (props) => {
    return(
        <div className="option-card">
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img className="form-pictures" alt="Acivity meter" src={props.picturePath} />}
            >
                <Meta title={props.title} description={props.description} />
            </Card>,
        </div>
    );
}

export default OptionCard;