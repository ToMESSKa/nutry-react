
import { Header } from 'antd/lib/layout/layout';
import { Space, Col} from 'antd';
import Calendar from "../routing/main/addfood/Calendar"
import { Children } from 'react';


function LeftColumn({children}) {
    return(
        <Col span={4} offset={1} style={{minWidth: 300}}>{children}</Col>

    )
}

export default LeftColumn;
