import React from 'react';
import Button from '@material-ui/core/Button';

class template_button extends React.Component {   
    FullWidth(ButtonName){
        const buttonStyle = {
            width: '80%',
            marginLeft: '10%'
           }
            return  <Button variant="contained" variant="outlined" component="span" style={buttonStyle} color="primary" >
                        {ButtonName}
                    </Button>
    }
}  
export default template_button;

