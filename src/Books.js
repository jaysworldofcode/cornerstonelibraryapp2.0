import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './css/global_style_sheet.css';
import logo from 'C:/Users/RPA-06/Desktop/Git Repos/CornerstoneLibraryApp/src/Book/testbooklet/cover.png';
import ReactDOM from 'react-dom';
import ViewBook from './ViewBook';

export default class Books extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            height: 0,
            isShouldAddMargin: false
          }
    };
    ViewBook(){
        ReactDOM.render(<ViewBook/>, document.getElementById('root'));
    }
    NewBook(
        title,path,content,writer){
          return    <Row id='book' onClick={this.ViewBook}>
                        {/*style={{marginTop:this.state.height}}*/}
                        <Col xs={4} md={2} xl={1} id='book-cover'>
                           <img src={logo} alt="cover" className='center'/>
                        </Col>
                        <Col xs={8} md={10} xl={11}>
                          <ul>
                              <li id='book-header'> {title}</li>
                              <li id='book-writer'>Author: {writer}</li>
                              <li id='book-type'> 
                                <span className='book-type-badge-custom'>Literature</span>
                                <span className='book-type-badge-custom'>Novel</span>
                              </li>
                              <li id='book-view'>GET THIS BOOK</li>
                          </ul>
                        </Col>
                    </Row>
    }  
    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ height });
    }
    render() {
        return (
            <div className='BooksContainer' style={{backgroundColor:'white'}}>
                <div className='TopNavContainer' ref={ (divElement) => { this.divElement = divElement } }>
                    {/* <Row>
                        <Col>
                            <p className='user'>Hello {this.props.username}!</p>
                        </Col>
                    </Row> */}
                    <Row style={{marginTop:'80px'}}>
                        <Col>
                            <p className='navTitle'>Bookshelf</p>
                        </Col>
                    </Row>
                </div>
                {this.NewBook('You are not alone','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu.', 'Juan Dela Cruz')}
                {this.NewBook('You are not alone','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu.', 'Juan Dela Cruz')}
                {this.NewBook('You are not alone','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu.', 'Juan Dela Cruz')}
                {this.NewBook('You are not alone','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu.', 'Juan Dela Cruz')}
                {this.NewBook('You are not alone','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu.', 'Juan Dela Cruz')}
                {this.NewBook('You are not alone','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu.', 'Juan Dela Cruz')}
                {this.NewBook('You are not alone','../assets/Images/banner.png','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris arcu nisl, volutpat sed posuere eu.', 'Juan Dela Cruz')}
            </div>    
        );
    }
}
