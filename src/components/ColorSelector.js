import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable'; 
import {colorFetch, sendRequest} from "../helpers";
var height;

class ColorSelector extends React.Component {
    
    
    state = {
        activeDrags: 0,
        deltaPosition: {
          x: 0, y: 0
        },
        controlledPosition: {
          x: -400, y: 200
        }
      };
    
      handleDrag = (e, ui) => {
      

        const {x, y} = this.state.deltaPosition;
        this.setState({
          deltaPosition: {
            x: x + ui.deltaX,
            y: y + ui.deltaY,
          }
        });
       
            var all = document.getElementsByClassName('hiddener');
            for (var i = 0; i < all.length; i++) {
                 height = 207 + (this.state.deltaPosition.y.toFixed(0)) * -1

              all[i].style.height = height + "px";
            }
            console.log(height);       
      };
    
      onStart = () => {
          console.log("start");
          var all = document.getElementsByClassName('colorSelector');
          for (var i = 0; i < all.length; i++) {
             

            all[i].style.transform = "scale(1.3)";
          }
          
        this.setState({activeDrags: ++this.state.activeDrags});
      };
    
      onStop = () => {
          console.log("stop");
          var all = document.getElementsByClassName('colorSelector');
          for (var i = 0; i < all.length; i++) {
            all[i].style.transform = "scale(1)";
          }
          
        this.setState({activeDrags: --this.state.activeDrags});
        if(document.getElementById('colorBar').classList.contains('colorBlast')){
          colorFetch(height)
        }
        if(document.getElementById('colorBar').classList.contains('colorRed')){
          alert("read")
        }

       
      };
    
      // For controlled component
      adjustXPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {x, y} = this.state.controlledPosition;
        this.setState({controlledPosition: {x: x - 10, y}});
      };
    
      adjustYPos = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {controlledPosition} = this.state;
        const {x, y} = controlledPosition;
        this.setState({controlledPosition: {x, y: y - 10}});
      };
    
      onControlledDrag = (e, position) => {
        const {x, y} = position;
        this.setState({controlledPosition: {x, y}});
      };
    
      onControlledDragStop = (e, position) => {
        this.onControlledDrag(e, position);
        this.onStop();
      };
    

     
    
     
  

    render(){ 
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        const {deltaPosition, controlledPosition} = this.state;
           
        return (
            <div className="colorSelector" >
            <div className="hiddener">
                <div className="theColor colorBlast" id="colorBar"></div>
                
            </div>
            <Draggable axis="y" handle=".mover" defaultPosition={{x: 0, y: 0}} onStart={this.onStart} onStop={this.onControlledDragStop} onDrag={this.handleDrag} scale={1.2} bounds={{top: -93, bottom: 207}}>
            <div className="mover" axis="y"  onStart={this.handleStart} onStop={this.handleStart}></div>
            {/* <div className="mover" axis="y"  onStart={this.handleStart}>y: {deltaPosition.y.toFixed(0)}</div> */}
            </Draggable>
           
           
        </div>
                
        );
    } 
}

export default ColorSelector;