import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";

export const FooterS=styled.footer`
    background-color: ${Color.backgroundLight};
    display: flex;
    align-items: center;
    height: 50px;
    margin-top: 3em;
    width: 100%;
    font-size: ${Fonts.FONT_SIZE_SMALL}px;
    color:${Color.textLight}

`