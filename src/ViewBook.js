import React from 'react';
import ReactDOM from 'react-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './css/global_style_sheet.css';
import DownloadedIcon from './assets/icons.js';
import Books from './Books';
import ReadBook from './ReadBook';

export default class ViewBook extends React.Component {

    constructor(props) {
        super(props);

        this.Read = this.Read.bind(this);
    };
    Back(){
        ReactDOM.render(<Books BookPath={this.props.BookPath} />, document.getElementById('root'));
    }
    Read(){
        ReactDOM.render(<ReadBook BookPath={this.props.BookPath}/>, document.getElementById('root'));
    }
    render() {
        const BookDetails = require('./Book/'+this.props.BookPath+'/info.json');
        return (
            <div style={{backgroundColor:'white'}}>
                <div style={{backgroundColor:'white'}}>
                    <Row>
                        <Col className='back-button' onClick={this.Back.bind(this)} >
                            <span>{new DownloadedIcon().BackIcon()}</span>
                        </Col>
                    </Row>
                    <Row className='view-book-content'>
                        <Col>
                            <ul>
                                <li id='view-book-image'>
                                    <img src={require('./Book/'+this.props.BookPath+'/cover.png')} alt="cover" style={{width:'140px', height:'200px', marginTop:'20px'}}/>
                                </li>
                                <li id='view-book-header'>{BookDetails['BookTitle']}</li>
                                <li id='view-book-writer'>Author: {BookDetails['Writer']}</li>
                                <li id='view-book-read-bt' onClick={this.Read}><span>READ NOW</span></li>
                                <li id='view-book-type'> 
                                    <span className='view-book-type-badge-custom'>Literature</span>
                                    <span className='view-book-type-badge-custom'>Novel</span>
                                </li>
                                <li id='view-book-description'>{BookDetails['BookDescription']}</li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>    
        );
    }
}
