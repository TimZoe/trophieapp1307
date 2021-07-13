import React from 'react';
import {Link} from "react-router-dom";
import './logIn.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';


Amplify.configure(awsconfig)

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
    <AmplifySignOut />
    </div>
   
   
    

                  
 </div>
   
    )
}
export default withAuthenticator(logIn);