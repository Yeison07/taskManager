import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";

export const CardProjectS=styled.div`
    display: flex;
    align-items: center;
    width: 400px;
    transition: transform 100ms ease-in-out;
    margin: 5em 0;
    cursor: pointer;
    & hr:first-of-type{
        border: 2px solid ${Color.hrLineDark};
    }

    & >hr:nth-child(3){
        margin-left: 2em;
        border: 1px solid ${Color.hrLineLight}60;
    }
    
    & > div{
        padding-left: 1em;
    }

    &:hover{
       transform: translateY(-1em);
       opacity: 70%;
        
    }

    
`
export const TitleS=styled.p`
    font-weight: 500;
    font-size: ${Fonts.FONT_SIZE_LARGE}px;
    align-self: flex-start;
    
`

export const DescriptionText=styled.p`
    font-size: ${Fonts.FONT_SIZE_MEDIUM}px;
`