import React from 'react';
import './css/global_style_sheet.css';
import ReactDOM from 'react-dom';
import Alert from '@material-ui/lab/Alert';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {
  
  constructor(props) {
     super(props);
    };
  render() {
    const container_style = {
      backgroundColor: 'coral',
     }

     return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
        {AddStudent('Jay Lord','Dayuday','Abueva')}
        {AddStudent('Jay Lord','Dayuday','Abueva')}
        {AddStudent('Jay Lord','Dayuday','Abueva')}
        {AddStudent('Jay Lord','Dayuday','Abueva')}
        {AddStudent('Jay Lord','Dayuday','Abueva')}
        {AddStudent('Jay Lord','Dayuday','Abueva')}
        {AddStudent('Jay Lord','Dayuday','Abueva')}
        </Grid>
      </Grid>
    );
  }
}

export default App;

function AddStudent(
  Firstname,Middlename,Lastname ){
    const main = {
      margin: '50px'
    }
    const root = {
      minWidth: 275,
    };
    const title = {
      fontSize: 14
    };

    return  <Card style={main}>
                    <CardContent>
                      <Typography className={title} color="textSecondary" gutterBottom>
                      {Firstname} {Middlename} {Lastname}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color="primary">Delete</Button>
                      <Button>Update</Button>
                    </CardActions>
            </Card>  
}