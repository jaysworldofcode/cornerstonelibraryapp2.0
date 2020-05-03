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
    Review(name, comment){
        return   <li id='review'>
                        <ul>
                            <li id='review-comment-name'>{name}</li>
                            <li id='review-comment'>{comment}</li>
                        </ul>
                </li>
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
                                <br/>
                                <li className='action-button'>
                                    <span id='read-book-read-bt' onClick={this.Read}>READ NOW for ({BookDetails['Points']}) points</span>
                                </li>
                                <li id='view-book-header'>{BookDetails['BookTitle']}</li>
                                <li id='view-book-writer'>Author: {BookDetails['Writer']}</li>
                                <li id='view-book-type'> 
                                    <span className='view-book-type-badge-custom'>LITERATURE</span>
                                    <span className='view-book-type-badge-custom'>NOVEL</span>
                                </li>
                                <br/>
                                <li id='view-book-description'>{BookDetails['BookDescription']}</li>
                                <li id='view-book-reviews-title'>Reviews</li>
                                {this.Review('John Doe','Quisque eget faucibus ligula. Nunc sed lacus hendrerit, dignissim diam nec, efficitur est. Morbi aliquam mollis nisl, a iaculis dolor interdum nec.')}
                                {this.Review('Juan Dela Cruz','Phasellus at eros vel nibh luctus commodo. Nulla tempus orci eu eleifend rutrum. Aliquam magna lorem, feugiat at ante ut, ultricies varius mi.')}
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>    
        );
    }
}
