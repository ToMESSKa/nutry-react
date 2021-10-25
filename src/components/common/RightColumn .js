import { Col } from 'antd';

function RightColumn({children}) {
    return(
        <Col span={16}>{children}</Col>
    )
}

export default RightColumn;