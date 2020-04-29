import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './css/global_style_sheet.css';
import logo from './Book/pagtulunan/cover.png';
import ReactDOM from 'react-dom';
import ViewBook from './ViewBook';

export default class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isShouldAddMargin: false
          }
    };
    ViewBook(SetBookPath){
        ReactDOM.render(<ViewBook BookPath={SetBookPath}/>, document.getElementById('root'));
    }
    NewBook(path){
            const BookDetails = require('./Book/'+path+'/info.json');
            return    <Row id='book' onClick={this.ViewBook.bind(this, path)}>
                            {/*style={{marginTop:this.state.height}}*/}
                            <Col xs={4} md={2} xl={1} id='book-cover'>
                            <img src={require('./Book/'+path+'/cover.png')} alt="cover" className='center' style={{width:'80', height:'120px'}}/>
                            </Col>
                            <Col xs={8} md={10} xl={11}>
                            <ul>
                                <li id='book-header'> {BookDetails['BookTitle']}</li>
                                <li id='book-writer'>Author: {BookDetails['Writer']}</li>
                                <li id='book-type'> 
                                    <span className='book-type-badge-custom'>Literature</span>
                                    <span className='book-type-badge-custom'>Novel</span>
                                </li>
                                <li id='book-view'>GET THIS BOOK</li>
                            </ul>
                            </Col>
                        </Row>
    }  
    setBooks(){
        const data = require('./Book/books.json');

          data.map(function(item, i){
            console.log(item);
          }); 
          console.log('tester');
    }
    render() {
        const data = require('./Book/books.json');
        return (
            <div className='BooksContainer' style={{backgroundColor:'white'}}>
                <div className='TopNavContainer' ref={ (divElement) => { this.divElement = divElement } }>
                    <Row style={{marginTop:'80px'}}>
                        <Col>
                            <p className='navTitle'>Bookshelf</p>
                        </Col>
                    </Row>
                </div>
                {this.setBooks()}
                {data.map((value, index) => {
                    return this.NewBook(value) 
                })}
            </div>    
        );
    }
}
