import styled from "styled-components"
import { Color, Fonts } from "../../app/shared/style_const/style";

export const CotaninerBoard=styled.div`
display: flex;
flex-direction: column;
    
    
`
//Arreglar el responsive con el width auto
export const Board=styled.div`
    background-color: ${Color.backgroundWhite};
    margin: 0 auto;
    padding: 0 5em;
    width: 80%;
    min-height: 100vh;

`

export const SubTitleS=styled.p`
    font-weight: 500;
    font-size: ${Fonts.FONT_SIZE_MEDIUM}px;
    
`