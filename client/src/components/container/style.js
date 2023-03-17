import styled from "styled-components";
import { Color } from "../../app/shared/style_const/style";

export const Container= styled.div`
    height: ${({height})=> height ? height : "100vh"};
    width: ${({width})=> width ? width : "100%"};
    display: flex;
    flex-wrap: ${({wrap})=> wrap ? wrap : "nowrap"};
    align-items: ${({align})=> align ? align : "center"};
    justify-content: ${({justify})=> justify ? justify : "center"};
    flex-direction: ${({direction})=> direction };
    background-color: ${({bgcolor})=> bgcolor ? bgcolor : ""};
    min-height: ${({min})=> min ? min : ""};;
   
`;

export const ContainerColumn=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({bgcolor})=> bgcolor ? bgcolor : ""};
`

export const ContainerFlex=styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`