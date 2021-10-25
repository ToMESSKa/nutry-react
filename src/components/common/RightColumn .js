import { Col } from 'antd';

function RightColumn({children}) {
    return(
        <Col flex={3} gutter={[16]}>
            {children}
        </Col>
        
    )
}

export default RightColumn;