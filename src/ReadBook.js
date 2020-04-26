import React from 'react';
import ReactDOM from 'react-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './css/global_style_sheet.css';
import DownloadedIcon from './assets/icons.js';
import ViewBook from './ViewBook';

export default class ReadBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPages: 0
        }
    };
    ViewBook(){
        ReactDOM.render(<ViewBook/>, document.getElementById('root'));
    }
    NextPage(){
         if(this.state.currentPage >= this.state.totalPages){
            this.setState({ currentPage: 1 });
         }else{
            this.setState({ currentPage: this.state.currentPage + 1 });
        }
        console.log('Current page: '+this.state.currentPage+" | Total page: "+this.state.totalPages);
    }
    BackPage(){
        if((this.state.currentPage-1) === 0){
            alert('File not exists anymore');
        }else{
            this.setState({ currentPage: this.state.currentPage - 1 });
        }
    }
    componentDidMount() {
        const data = require('./Book/pagtulunan/info.json');
        this.setState({ totalPages: data['TotalPages'] });
    }
    render() {
        return (
            <div style={{backgroundColor:'white'}}>
                <div style={{backgroundColor:'white'}}>
                    <Row onClick={this.ViewBook}>
                        <Col className='back-button'>
                            <span>{new DownloadedIcon().BackIcon()}</span>
                        </Col>
                    </Row>
                    <Row className='read-book-content'>
                        <Col xs={1} onClick={this.BackPage.bind(this)}>
                            <span></span>
                        </Col>
                        <Col xs={10}>
                            <img src={require('./Book/pagtulunan/'+this.state.currentPage+'.png')} alt="cover"/>
                            </Col>
                        <Col xs={1} onClick={this.NextPage.bind(this)}>
                            <span></span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='read-book-footer'>
                            <span>{this.state.currentPage}/{this.state.totalPages}</span>
                        </Col>
                    </Row>
                </div>
            </div>    
        );
    }
}
