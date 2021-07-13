import React from 'react';
import {Link} from "react-router-dom";
import './register.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';


Amplify.configure(awsconfig)

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

        <AmplifySignOut />

        </div>
          
    </div>
   
    )
}
export default withAuthenticator(register);