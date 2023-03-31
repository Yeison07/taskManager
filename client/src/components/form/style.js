import styled from "styled-components";
import { Color } from "../../app/shared/style_const/style";

export const FormS=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${Color.backgroundLight};
    padding: 2em;
    height: 40%;
    border-radius: 0.3em;
    

    > *{
        margin-top:2em;
        align-self: center;
    }

`;