import React from 'react';
import Options from "./Options";
import Burguer from "./Burguer";
import {sendRequest, targetDeviceIPFetcher} from "../helpers";


class Effects extends React.Component {
    

    constructor(){
        super();

        this.state = {
             black: true
        }
   }

   changeColor(){
    this.setState({black: !this.state.black})

}

    send = (e) =>{
        // sendRequest(e);
        //targetDeviceIPFetcher("device1");
        
         
        var i;
        var btns = document.querySelectorAll('.buttons')
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove('button--inside--shadow')
  }
console.log(e.target.parentElement );
if(e.target.parentElement.classList.contains('buttons')){
    e.target.parentElement.classList.add('button--inside--shadow')
}else{
    e.target.classList.add('button--inside--shadow')
}
    }

    render(){ 
        let btn_class = this.state.black ? "blackButton" : "whiteButton";
     
        return (


            <React.Fragment>
                <div className="wrapper--wrapper">
            {/* <div>
                <Options title="Effects" />
              
            </div>  */}
            <div className="wrapperEffects">
            <button className="buttons" onClick={this.send.bind(this)} data-id="3" value="wowo">Effects test</button> 
            <button className="buttons" onClick={this.send.bind(this)} data-id="3" value="wowo">Effects test</button> 
            <button className="buttons" onClick={this.send.bind(this)} data-id="3" value="wowo">Effects test</button>
            </div>
            <Burguer push={this.props.history} />
               {/* < About /> */}
           
               </div>
           </React.Fragment>
           
           
                
        );
    } 
}

export default Effects;