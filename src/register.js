import React from 'react';
import {Link} from "react-router-dom";
import './register.css';

function register (){

    return (

    <div>    

        <h1 class="h1">Bitte Registieren</h1>   
        <Link to="./dashboard">
            <div class="buttonReg">
                Weiter zu meinem Dashboard
            </div>
        </Link>
        
        
        <div class="registerScreen">

       
        </div>
          
    </div>
   
    )
}
export default register;