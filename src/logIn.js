import React from 'react';
import {Link} from "react-router-dom";
import './logIn.css';


function logIn (){

    return (

    <div>    

    <h1 class="h1">Bitte einloggen</h1>   
    <Link to="./dashboard">
            <div class="buttonReg">
                Weiter zu meinem Dashboard
            </div>
        </Link>
    
    <div class="LogInScreen">

    </div>
   
   
    

                  
 </div>
   
    )
}
export default logIn;