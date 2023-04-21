import styled from "styled-components";
import { Color } from "../../app/shared/style_const/style";

export const FormS=styled.form`
    display: flex;
    flex-direction: column;
    background-color: ${Color.backgroundWhite};
    width: 40%;
    height: 60%;
    border-radius: 0.3em;
    padding: 3em;
    box-shadow: 0 -1em 0 ${Color.primary};
    
`

export const InputForm=styled.input`
    border: solid 1px #000;
    border-radius: 0.3em;
    width: auto;
    height: 50px;
`


export const LabelForm=styled.label`
    font-weight: 500;
    margin: 0.5em 0;
`

export const ButtonForm=styled.button`
    border: none;
    border-radius: 1em;
    background-color: ${Color.primary};
    color:${Color.textWhite};
    font-size: 22px;
    font-family: 'Roboto',sans-serif;
    height: 70px;
    width: 70%;
    margin-top:1em;
    transition: transform 150ms ease-in-out;
    :hover{
        transform: translateY(-0.2em);
        opacity: 80%;
    }
`
