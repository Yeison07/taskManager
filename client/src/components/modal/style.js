import styled from "styled-components";
import { Color, Fonts } from "../../app/shared/style_const/style";

export const ModalPosition=styled.section`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${Color.backgroundLight}99;
    overflow: auto;
    animation: modal-appear 350ms;

    @keyframes modal-appear {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`
export const ModalS=styled.div`
    position: relative;
    top: 10%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 0 2em;
    width: 55%;
    min-height: 400px;
    height: auto;
    background-color: ${Color.backgroundLight};
    overflow: hidden;
    border-radius: 0.2em;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

`
export const ModalHeader=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg{
        cursor: pointer;
        margin-left: auto;
        padding: 0.5em;
    }

    svg:hover{
        background-color: ${Color.backgroundDark};
    }
    
`
export const CloseModalIcon=styled.div`
    font-size: ${Fonts.FONT_SIZE_SMALL};
    padding: 0.5em 1em; 
    cursor: pointer;
    :hover{
        background-color:${Color.cursorPointerhover};
    }
`

export const ModalTaskId=styled.p`
    font-size: ${Fonts.FONT_SIZE_SMALL}; 
    padding: 0.5em 1em;
    
    :hover{
        background-color: ${Color.ModalTaskIdhover};
        border-radius:0.1em;
    }
`

export const ModalBody=styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 10%;
    margin-top: 0.5em;
    width: 98%;
    
`
export const ModalBodyContent=styled.div`
    display: flex;
    flex-direction: column;
    
`

export const ModalAssignees=styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: ${Fonts.FONT_SIZE_SMALL};
    
`

export const IconAssignees=styled.div`
    display: flex;
    align-items: center;
    padding: 0 1em;
    max-height: 50px;
    margin: 0.5em 1em 0 0;
    cursor: pointer;
    background-color: ${Color.backgroundDark};
    border-radius: 0.3em;
    :hover{
        background-color: ${Color.CloseModalIconPointerhover};
        border-radius:0.2em;
    }
`
export const AddMemberIcon=styled.div`
    color: blue;
    max-height: 50px;
    cursor: pointer;
    ::before{
        content: "+";
        padding: 0.5em;
    }
    :hover::after{
        
    }
    
`

export const ModalSubTitle=styled.p`
    font-weight: 600;
    width: 100%;
    max-height: 30px;
`
export const ModalTitle=styled.p`
    font-size: ${Fonts.FONT_SIZE_LARGE}px;
    color: ${Fonts.PRIMARY_COLOR};
`

export const ModalDescription=styled.p`
    font-size: ${Fonts.FONT_SIZE_MEDIUM};
    
`
