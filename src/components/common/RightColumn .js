import { Col } from 'antd';

function RightColumn({children}) {
    return(
        <Col span={20}>{children}</Col>
    )
}

export default RightColumn;