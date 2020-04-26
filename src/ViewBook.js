import React from 'react';
import ReactDOM from 'react-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './css/global_style_sheet.css';
import DownloadedIcon from './assets/icons.js';
import logo from 'C:/Users/RPA-06/Desktop/Git Repos/CornerstoneLibraryApp/src/Book/testbooklet/cover.png';
import Books from './Books';
import ReadBook from './ReadBook';

export default class ViewBook extends React.Component {

    constructor(props) {
        super(props);
    };
    Back(){
        ReactDOM.render(<Books username={'John Doe'} />, document.getElementById('root'));
    }
    Read(){
        ReactDOM.render(<ReadBook />, document.getElementById('root'));
    }
        render() {
        return (
            <div style={{backgroundColor:'white'}}>
                <div style={{backgroundColor:'white'}}>
                    <Row>
                        <Col className='back-button' onClick={this.Back} >
                            <span>{new DownloadedIcon().BackIcon()}</span>
                        </Col>
                    </Row>
                    <Row className='view-book-content'>
                        <Col>
                            <ul>
                                <li id='view-book-image'>
                                    <img src={logo} alt="cover" style={{width:'140px', height:'200px', marginTop:'20px'}}/>
                                </li>
                                <li id='view-book-header'>You are not alone</li>
                                <li id='view-book-writer'>Author: Juan Dela Cruz</li>
                                <li id='view-book-type'> 
                                    <span className='view-book-type-badge-custom'>Literature</span>
                                    <span className='view-book-type-badge-custom'>Novel</span>
                                </li>
                                <li id='view-book-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur enim eget venenatis lobortis. Aenean in nibh sodales, tempus sapien id, pretium elit. Nullam fermentum, dui at suscipit commodo, elit metus efficitur diam, ac imperdiet justo tellus at felis. Sed et dolor ex. Pellentesque id pretium est, sed dictum sem. Quisque vitae orci fringilla justo maximus dapibus. Maecenas pharetra, orci sed varius porttitor, nisl tortor pulvinar felis, non feugiat odio sem vel odio. Curabitur maximus consequat orci. Phasellus euismod risus a mauris sollicitudin auctor.</li>
                                <li id='view-book-read-bt' onClick={this.Read}>READ</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>    
        );
    }
}
