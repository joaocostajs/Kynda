import React from 'react';
import ColorSelector from './ColorSelector';
import Effects from './Effects';
class Options extends React.Component {

    
   

    render(){ 
      let title = this.props.title
      console.log(this.props.title);
      
        return (
          <div className="wrapper-titles">
          <div className="titles">
              <h1>{this.props.title}</h1>
              <h3>Mode</h3>
          </div>
          <ColorSelector/>
          {/* <Effects/> */}
       
            
          
      </div>
                
        );
    } 
}

export default Options;