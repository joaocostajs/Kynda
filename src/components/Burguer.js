import React from 'react';
import {Route, Link} from 'react-router-dom'
import Effects from "./Effects";
let state = "closed"
class Burguer extends React.Component {

    constructor(){
        super();
        this.state = {
            darkMode: false
       }
    }

    changeColor = (e) =>{
        this.setState({darkMode: !this.state.darkMode, })
        state = "open"
     setTimeout(function() { //Start the timer
        document.getElementById('wrapperMenu').classList.remove('menu--active')
       }.bind(this), 100)
       this.props.changePage(Effects)
    }



burguerState = () =>{
if (state === "open") {
    state = "closed"
  
}else{
    state = "open"
    setTimeout(function() { //Start the timer
        document.getElementById('wrapperMenu').classList.add('menu--active')
       }.bind(this), 400)
}
   if( document.getElementById("burguer").classList.contains('burguer--active')) {
    document.getElementById("burguer").classList.remove("burguer--active");
    document.getElementById("burguer").classList.add("burguer--closed");
   }else{
    document.getElementById("burguer").classList.add("burguer--active");
    document.getElementById("burguer").classList.remove("burguer--closed");
   }
}



router = (e) =>{ 
     this.props.push.push('/' + e)
     state = "open"
     setTimeout(function() { //Start the timer
        document.getElementById('wrapperMenu').classList.remove('menu--active')
       }.bind(this), 100)
}

    render(){ 
        let darkMode = this.state.darkMode;
        document.body.classList.remove(!darkMode ? "dark-mode" : "light-mode")
        document.body.classList.add(darkMode ? "dark-mode" : "light-mode")
        return (
            <div id="burguer" className="burguer--closed" onClick={this.burguerState}>
                <div id="wrapperMenu">
                  <h2 onClick={() => this.router("")} data-text="Home">Home</h2>
                  <h2 onClick={() => this.router("effects")} data-text="Effects">Effects</h2>
                  <h2 onClick={() => this.router("moods")} data-text="Moods">Moods</h2>
                  <h4 onClick={this.changeColor} className="darky" data-text="Dark Mode">Dark Mode</h4>
                </div>
            </div>
        );
    } 
}

export default Burguer;