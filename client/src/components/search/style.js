import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";
import { Search } from "../svg/style";

export const SearchS=styled.input`
    height: 30px;
    border: 1px solid ${Color.hrLineDark};
    background-size: 20px;
    padding-left: 2em;
    

    &:hover{
        background-color: ${Color.backgroundDark};
    }

    

`