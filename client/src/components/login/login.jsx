import React, { useEffect } from 'react';
import { InputS } from "../input/input";
import { FormS } from '../form/style';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ButtonS } from '../button/style';
import { TitleS } from '../cardProject/style';

const Login = () => {
    const navigate = useNavigate();

    const handleCallbackResponse=(response)=>{
        console.log("Enconded JWT ID token:" + response.credential)
    }

    useEffect(() => {
      /* global google */
      google.accounts.id.initialize(
        {
            client_id:"388760710688-nu101lni0bbq33pc8c19p42jo4d7imhc.apps.googleusercontent.com",
            callback: handleCallbackResponse
        }
      )
    google.accounts.id.renderButton(
        document.querySelector("#signInDiv"),
        {theme:"filled_blue",size:"large"}
    )
      return () => {
        
      }
    }, [])
    
    return ( 
            <FormS>
                <TitleS>INICIAR SESION CON GOOGLE</TitleS>
                <div id='signInDiv' />
            </FormS>
        
     );
     
    }
export default Login;
