import { Progress } from 'antd';

function CaloriesBar(props) {
    return (
        <div className="calories-bar">
        <Progress percent={(parseInt(props.cal)/parseInt(props.recommended))*100} status="exception" />
        </div>
    );
  }

  export default CaloriesBar;