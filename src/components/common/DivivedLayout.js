import { } from 'antd/lib/layout/layout';
import { Row } from 'antd';

function DividedLayout({children}) {
    return(
        <Row className="divided-layout" >{children}</Row>
    )
}

export default DividedLayout;
