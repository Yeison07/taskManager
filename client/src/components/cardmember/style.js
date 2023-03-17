import styled from "styled-components";
import { Color } from "../../app/shared/style_const/style";


export const CardMemberS= styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    transition: all 0.1s;
    padding: 2em 3em;
    
    

    &:hover{
        background: ${Color.backgroundMedium};
        transition: all 0.1s;
        
    }
`

export const ProfileContainer= styled.div`
    width: ${({width})=>width ? width : "150px"};
    height: ${({height})=>height ? height : "150px"};
    background-size: ${props => props.width} ${props => props.height};
    border-radius: 50%;
    background-image: url(${({imgUrl})=> imgUrl ? imgUrl : "none"});
    background-position: center;
    
`