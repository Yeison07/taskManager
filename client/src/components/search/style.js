import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";

export const ContainerSearchInput=styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${Color.borderMedim};
    align-self: flex-start;

    :hover{
        border-color:#000;
    }
`

export const SearchInput=styled.input`
    height: 30px;
    border: none;
    outline: none;

    &::placeholder{
        font-family: 'Roboto',sans-serif;
        font-size: 15px;
        text-align: center;
        color:#000
    }
     

   

    

`