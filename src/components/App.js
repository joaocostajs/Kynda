import React from 'react';
import ReactDOM from "react-dom";
import Options from "./Options";
import About from "./About";
import Burguer from "./Burguer";
import Effects from "./Effects";
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            darkMode: true,
            page: Options,
       }
    }

    changeColor = (e) =>{
        this.setState({darkMode: !this.state.darkMode})
    }
    changePage = (page) => {
        var newPage = page
        console.log(newPage);
        
        this.setState({page})
        
    }
   
    render(){ 
        let darkMode = this.state.darkMode;
        document.body.classList.remove(!darkMode ? "dark-mode" : "light-mode")
        document.body.classList.add(darkMode ? "dark-mode" : "light-mode")
        const Page = this.state.page
        console.log(Page);
        
        return (
            <React.Fragment>
             <Burguer changePage={this.changePage} push={this.props.history} state={this.state} dark={darkMode} />
             <div>
             <Page />
                {/* <`${Page}` /> */}
                 <Options title="Color Blast" darkMode={darkMode ? "Dark Mode" : "Light Mode"} />
             </div> 
           
                {/* < About /> */}
            
            
            </React.Fragment>
        );
    } 
}

export default App;