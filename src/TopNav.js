import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import DownloadedIcon from './assets/icons.js';
import './css/global_style_sheet.css';

class TopNav extends React.Component {

    constructor(props) {
        super(props);
    };
    render() {
    return (
                <Container className='TopNavContainer'>
                <Row>
                    <Col>
                        <p className='user'>Hello $user</p>
                    </Col>
                    {/** <Col>{new DownloadedIcon().DiscipleshipIcon()}</Col> **/}
                </Row>
                <Row>
                    <Col>
                        <p className='navTitle'>Bookshelf</p>
                    </Col>
                </Row>
                </Container>        
            );
    }
}

export default TopNav;