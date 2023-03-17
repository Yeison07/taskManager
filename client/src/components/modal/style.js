import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";

export const ModalS=styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 2em;
    width: 50%;
    min-height: 400px;
    height: auto;
    background-color: gainsboro;
    overflow: hidden;

`
export const ModalHeader=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const CloseModalIcon=styled.div`
    font-size: ${Fonts.FONT_SIZE_SMALL};
    padding: 0.5em 1em; 
    :hover{
        background-color: #00000010;
    }
`

export const ModalTaskId=styled.p`
    font-size: ${Fonts.FONT_SIZE_SMALL}; 
    padding: 0.5em 1em;
    
    :hover{
        background-color: #00000020;
    }
`
export const ModalBody=styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 13%;
    margin-top: 2em;
`
export const ModalAssignees=styled.div`
   display: flex;
   flex-direction: column;
    font-size: ${Fonts.FONT_SIZE_SMALL};
    
`

export const IconAssignees=styled.div`
    display: flex;
    align-items: center;
    padding: 0 1em;
    width: 30%;
    
    :hover{
        background-color: #00000010;
    }
`
export const AddMemberIcon=styled.div`
    color: blue;
    ::before{
        content: "+";
    }
`

export const ModalSubTitle=styled.p`
    font-weight: 600;
`
export const ModalTitle=styled.p`
    margin: 0;
    font-size: ${Fonts.FONT_SIZE_LARGE}px;
    color: ${Fonts.PRIMARY_COLOR};
`

export const ModalDescription=styled.p`
    font-size: ${Fonts.FONT_SIZE_MEDIUM};
    
`
