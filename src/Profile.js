import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import './css/global_style_sheet.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from '@material-ui/core/Button';

export default class Profile extends React.Component {
  
          
  constructor(props) {
     super(props);
    };
    Go_to_login(){
        ReactDOM.render(<Login />, document.getElementById('root'));
        ReactDOM.render(null, document.getElementById('navbar'));
    }
    render() {
     return (
        <Container fluid>
        <Row>
          <Col id='banner-home'>
          <center>
            <Avatar id='profile' aria-label="recipe">
                    J
            </Avatar>
          </center>
          <br />
          <p className='title'>Howdy, John Doe</p>
          </Col>
        </Row>
        <Row id='personal-info'>
        <ExpansionPanel>
            <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography>My Personal Info</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Container fluid>
                    <Row>
                        <Col>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </Col>
                    </Row>
                        <br />
                    <Row>
                        <Col>
                            <Button variant="contained" onClick={this.Go_to_login}>LOG-OUT</Button>
                        </Col>
                    </Row>
                </Container>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </Row>
        <br />
            <br />
            <br />
        <br />
      </Container>
    );
  }
}