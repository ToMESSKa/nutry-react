import { Col } from 'antd';

function RightColumn({children}) {
    return(
        <Col span={17}>{children}</Col>
    )
}

export default RightColumn;