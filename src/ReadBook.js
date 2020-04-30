import React from 'react';
import ReactDOM from 'react-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Toast } from 'react-bootstrap';
import './css/global_style_sheet.css';
import DownloadedIcon from './assets/icons.js';
import ViewBook from './ViewBook';
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class ReadBook extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            totalPages: 0,
            bookTitle: ''
        }
        this.ViewBook = this.ViewBook.bind(this);
    };
    ViewBook(){
        ReactDOM.render(<ViewBook BookPath={this.props.BookPath}/>, document.getElementById('root'));
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
        const data = require('./Book/'+this.props.BookPath+'/info.json');
        this.setState({ totalPages: data['TotalPages'] });
        this.setState({ bookTitle: data['BookTitle'] });

        const options = {
            autoClose: 2000,
            type: toast.TYPE.INFO,
            hideProgressBar: false,
            position: toast.POSITION.BOTTOM_LEFT,
            pauseOnHover: true,
            progress: 0,
            draggable: true,
            closeOnClick: true
        };
        toast.success("PRESS EDGES TO NAVIGATE NEXT/PREVIOUS PAGES!", options);
    }
    render() {
        return (
            <div style={{backgroundColor:'white'}}>
                <div style={{backgroundColor:'white'}}>
                    <Row onClick={this.ViewBook}>
                        <Col className='back-button' xs={2} md={2} xl={2}>
                            <span>{new DownloadedIcon().BackIcon()}</span>
                        </Col>
                        <Col xs={10} md={10} xl={10}>
                            <p id='read-book-header'>{this.state.bookTitle}</p>
                        </Col>
                    </Row>
                    <ToastContainer autoClose={4000} className='tester' />
                    <Row className='read-book-content'>
                        <Col xs={1} onClick={this.BackPage.bind(this)}>
                            <span></span>
                        </Col>
                        <Col xs={10}>
                            <img src={require('./Book/pagtulunan/'+this.state.currentPage+'.jpg')} alt="cover"/>
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
