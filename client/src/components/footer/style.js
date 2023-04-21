import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";

export const FooterS=styled.footer`
    background-color: ${Color.backgroundWhite};
    grid-column: 2;
    display: flex;
    align-items: center;
    height: 50px;
    width: 100%;
    margin-top: 5%;
    font-size: ${Fonts.FONT_SIZE_SMALL}px;
    color:${Color.textLight};
    

`