import React from 'react';
import { InputS } from "../input/input";
import { FormS } from '../form/style';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ButtonS } from '../button/style';
const Login = () => {
    const navigate = useNavigate();
    return ( 
            <FormS>
            <InputS placeholder='Ingrese su código' type="text" />
                <InputS placeholder='Contraseña' type="password" name="" id="" />
                <Link to="inicio/listado_proyectos"></Link>
                <ButtonS onClick={() => navigate('inicio')} bgColorHover="#EC2525" bgColor="#F05454">Iniciar sesion</ButtonS>
               
            </FormS>
        
        
     );
     
    }
export default Login;
