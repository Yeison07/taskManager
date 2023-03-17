import styled from "styled-components";

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