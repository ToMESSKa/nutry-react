import { Header } from 'antd/lib/layout/layout';
import { Space, Row, Col } from 'antd';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn ';

function DividedLayout({children}) {
    return(
        <Row className="divided-layout">
            {children}
        </Row>
    )
}

export default DividedLayout;
