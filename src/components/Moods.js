import React from 'react';
import {sendRequest} from "../helpers";

import palm from '../img/palm.svg';
import heart from '../img/heart.svg';
import forest from '../img/forest.svg';
import sun from '../img/sun.svg';

class Moods extends React.Component {
    

    send = (e) =>{
            // aqui podes chamar a tua funçao ou usar o sendRequest
            // o argumento que vem na funçao refere-se ao botao clicado no ecra e podes ter acesso aos seus atributos
            // ex: e.target.getAttribute("hash") vai te dar o valor do hash botao clicado, altera isso em baixo para o valor que precisares e mandas na tua funçao

         //sendRequest(e);
        //targetDeviceIPFetcher("device1");
        var i;
        var btns = document.querySelectorAll('.buttons')
  for (i = 0; i < btns.length; i++) {
    btns[i].classList.remove('button--inside--shadow')
    btns[i].classList.remove(btns[i].value)
  }
console.log(e.target.parentElement );
if(e.target.parentElement.classList.contains('buttons')){
    e.target.parentElement.classList.add('button--inside--shadow')
    e.target.classList.remove(e.target.value)
}else{
    e.target.classList.add('button--inside--shadow')
    e.target.classList.add(e.target.value)
    }
    }

    render(){ 
   
        return (

            <React.Fragment>
            <div>
                {/* <Options title="Moods" /> */}
               
            </div> 
            <div className="wrapper--wrapper">
              
            <div className="wrapperEffects">

            <button className="buttons" onClick={this.send.bind(this)}  hash="hashOne" value="night"> 
            <img src={palm} alt=""/>
                Night</button> 
                <button className="buttons" onClick={this.send.bind(this)}  hash="hash2" value="heart"> 
            <img src={heart} alt=""/>
               Heart</button> 
                <button className="buttons" onClick={this.send.bind(this)}  hash="hash3" value="summer"> 
            <img src={forest} alt=""/>
                Romantic</button> 
                <button className="buttons" onClick={this.send.bind(this)}  hash="hash4" value="sunset"> 
            <img src={sun} alt=""/>
                Sunset</button> 

            </div>
            </div>

           
           
           </React.Fragment>
                
        );
    } 
}

export default Moods;