import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './css/global_style_sheet.css';
import ReactDOM from 'react-dom';
import ViewBook from './ViewBook';
import DownloadedIcon from './assets/icons.js';

export default class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isShouldAddMargin: false,
            open: false
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    };
    ViewBook(SetBookPath){
        ReactDOM.render(<ViewBook BookPath={SetBookPath}/>, document.getElementById('root'));
    }
    NewBook(path){
            const BookDetails = require('./Book/'+path+'/info.json');
            return    <Row id='book' onClick={this.ViewBook.bind(this, path)}>
                            <Col xs={4} md={2} xl={1} id='book-cover'>
                                <img src={require('./Book/'+path+'/cover.png')} alt="cover" className='center' style={{width:'80', height:'120px'}}/>
                            </Col>
                            <Col xs={8} md={10} xl={11}>
                            <ul>
                                <li id='book-header'> {BookDetails['BookTitle']}</li>
                                <li id='book-writer'>Author: {BookDetails['Writer']}</li>
                                <li id='book-type'> 
                                    <span className='book-type-badge-custom'>LITERATURE</span>
                                    <span className='book-type-badge-custom'>NOVEL</span>
                                </li>
                                <li id='book-view'>PAGES {BookDetails['TotalPages']} </li>
                            </ul>
                            </Col>
                        </Row>
    }
    handleButtonClick(){
        this.setState(state => {
            return {
              open: !state.open,
            };
          });
    }
    render() {
        const data = require('./Book/books.json');
        return (
            <div className='BooksContainer' style={{backgroundColor:'white'}}>
                <div className='TopNavContainer' ref={ (divElement) => { this.divElement = divElement } }>
                    <Row >
                        <Col className='profile'>
                            <p onClick={this.handleButtonClick}>{new DownloadedIcon().ProfileIcon()}  Howdy, John Doe</p>
                        </Col>
                        <Col className='points'>
                            <p>$10,000</p>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        {this.state.open && (
                            <div class="dropdown">
                            <ul>
                                <li>LOGOUT</li>
                            </ul>
                            </div>
                        )}
                        </Col>
                    </Row>
                    <Row style={{marginTop:'10px'}}>
                        <Col>
                            <p className='navTitle'>Bookshelf</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="text" placeholder="Search" className="search-textfield-books"/>
                        </Col>
                    </Row>
                </div>
                {data.map((value, index) => {
                    return this.NewBook(value) 
                })}
            </div>    
        );
    }
}
