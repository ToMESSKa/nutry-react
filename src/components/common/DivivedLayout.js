import { Header } from 'antd/lib/layout/layout';
import { Space, Row, Col } from 'antd';

function DividedLayout({children}) {
    return(
        <Row className="divided-layout">{children}</Row>
    )
}

export default DividedLayout;
