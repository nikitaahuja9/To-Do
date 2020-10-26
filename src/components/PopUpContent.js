import React from 'react';  
import '../styles/Popup.css';  

export default class PopUpContent extends React.Component {  
  
  render() { 
    return (  
    <div className='popup' style={{backgroundColor: '#4C687F', borderRadius:'10px', height:window.innerHeight/2, width:window.innerWidth/2}}>  
      <div className='popup\_inner'>  
        <button onClick={this.props.closePopup}>close me</button>  
    </div>  
  </div>  
  );  
  }  
}  