import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";

export const ContainerSearchInput=styled.div`
    display: flex;
    align-items: center;
    border: 3px solid #353535;
    align-self: flex-start;
    border-radius: 1.5em;
    overflow: hidden;
    padding: 0.5em;

    svg{
        margin-right: 0.5em;
    }
`

export const SearchInput=styled.input`
    height: 30px;
    width: 250px;
    border: none;
    outline: none;
    font-family: 'Roboto',sans-serif;
    font-size: 18px;
    color:#353535;

    &::placeholder{
        color:#353535;
        text-align: start;
    }

    
     

   

    

`