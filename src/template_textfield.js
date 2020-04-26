import React from 'react';
import TextField from '@material-ui/core/TextField';

  class template_textfield extends React.Component {
    FullWidth(TextFieldText, isPassword){
        const TextFieldStyle = {
            width: '80%',
            marginLeft: '10%',
            paddingBottom: '10px'
        }
        if(isPassword){
            return      <TextField id="standard-basic" type="password" style={TextFieldStyle} placeholder={TextFieldText} color='#ffffff'/>
        }else{
            return      <TextField id="standard-basic" style={TextFieldStyle} placeholder={TextFieldText} />
        }
    }
}  
export default template_textfield;