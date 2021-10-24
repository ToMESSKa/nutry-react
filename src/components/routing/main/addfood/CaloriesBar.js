import { Progress } from 'antd';

function CaloriesBar(props) {
    console.log(parseInt(props.cal));
    console.log(parseInt(props.recommended));
    console.log((parseInt(props.cal)/parseInt(props.recommended))*100);
    return (
        <div className="calories-bar">
        <Progress percent={(parseInt(props.cal)/parseInt(props.recommended))*100} status="exception" />
        </div>
    );
  }

  export default CaloriesBar;