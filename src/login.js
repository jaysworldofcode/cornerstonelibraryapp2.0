import React from 'react';
import ReactDOM from 'react-dom';
import './css/global_style_sheet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Books from './Books';
import logo from './assets/Images/logo-shadow.png';
import { withStyles } from '@material-ui/core/styles';
import ButtonMaterialUI from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';

class login extends React.Component {
  
  constructor(props) {
     super(props);

     this.state ={
        setOpen: false
     }
    };
    LoginAccount(){
      {/** ReactDOM.render(<BottomNav />, document.getElementById('navbar')); **/}
      ReactDOM.render(<Books username={'John Doe'} />, document.getElementById('root'));
    }
    render() {
     const CenterComponents = {
        width: '100%',
        position: 'absolute', 
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        paddingBottom: '40%'
      };
      const ColorButton = withStyles(theme => ({
        root: {
          color: theme.palette.getContrastText(purple[500]),
          backgroundColor: '#007bff',
          '&:hover': {
            backgroundColor: '#007bff',
          },
          borderRadius: '20px',
          width: '80%',
          marginLeft: '10%',
          marginRight: '10%',
          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 14px 0 rgba(0, 0, 0, 0.14)"
        },
      }))(ButtonMaterialUI);
      return (
        <div>
        <div></div>
        <Container fluid style={CenterComponents}>
        <Row>
          <Col>
          <center>
            <img src={logo} />
          </center>
          <br />
          <Form style = {{ paddingTop: '20%'}}>
          <Form.Group controlId="formBasicEmail" className="create-full-width-style" >
            <Form.Control type="email" placeholder="Username" style = {{ borderRadius: '25px'}} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="create-full-width-style">
            <Form.Control type="password" placeholder="Password" style = {{ borderRadius: '25px'}}/>
          </Form.Group>
          <ColorButton variant="contained" color="primary" onClick={this.LoginAccount}>
            LOGIN
          </ColorButton>
        </Form>      
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default login;