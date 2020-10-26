import React from 'react';
import '../styles/Popup.css';

import PopUpContent from './PopUpContent';

export default class PopUp extends React.Component {

    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
        }  
        
          togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         }  

    render() {
        return (
            <div>
                <button outline="none" style={{textDecoration:'none', padding: 0, border: 'none', background: 'none'}} 
                onClick={this.togglePopup.bind(this)}> Edit Me</button>
                {this.state.showPopup ?
                    <PopUpContent
                        closePopup={this.togglePopup.bind(this)}
                    />
                    : null
                }
            </div>
        );
    }
}