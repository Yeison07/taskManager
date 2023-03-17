import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";



export const ButtonS=styled.button`
    border: none;
    border-radius: 3px;
    height: 50px;
    background-color: ${({bgColor})=> bgColor ? bgColor : "none"};
    color: ${Color.textWhite};
    transition: all 0.3s;
    font-size: ${Fonts.FONT_SIZE_MEDIUM}px;
    font-family: 'Roboto',sans-serif;
    font-weight: ${Fonts.FONT_WEIGHT_SEMI_MEDIUM};
    letter-spacing: 1px;

    &:hover{
        background-color: ${({bgColorHover})=> bgColorHover ? bgColorHover : "none"};
        transform: translateY(-0.3em);
        
    }

`