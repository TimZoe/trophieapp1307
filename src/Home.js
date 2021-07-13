import React from 'react';
import {Link} from "react-router-dom";
import './Home.css';

function Home (){

    return (

    <div>    

    <h1 class="h1">Welcome to Trophie</h1>   
    <div class="menuewrap">

        <Link to ="./register">
            <div class="button">Register</div>  
        </Link>
        <Link to ="./logIn">

          <div class="button">Log In</div>  

        </Link>
   
    </div>
    

                  
 </div>
   
    )
}
export default Home;