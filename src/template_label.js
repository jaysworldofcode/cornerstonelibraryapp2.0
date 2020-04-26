import React from 'react';

class template_label extends React.Component {
    fullwidth_title_not_bold(message){
        const LabelStyle = {
            width: '80%',
            marginLeft: '10%',
            textAlign: 'center'
        }
            return  <p style={LabelStyle}>{message}</p>
    }
}  
export default template_label;

