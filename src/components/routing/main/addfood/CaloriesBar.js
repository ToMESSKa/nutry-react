import { Progress } from 'antd';
import "./CaloriesBar.css"

function CaloriesBar(props) {
    return (
        <div className="calories-bar">
        <Progress percent={(parseInt(props.cal)<=parseInt(props.recommended)) ?
                            (parseInt(props.cal)/parseInt(props.recommended))*100 : 100}
                  success={{percent:(parseInt(props.cal)<=parseInt(props.recommended)) ?
                            (parseInt(props.cal)/parseInt(props.recommended))*100 :
                            (parseInt(props.recommended)/parseInt(props.cal))*100,
                            strokeColor:"#7cc028"}}
                  strokeColor={"#ff0000"}
                  style={{height:30}}
                  showInfo={false}/>
        </div>
    );
  }

  export default CaloriesBar;