import styled from "styled-components";

export const CardHistoryS = styled.div`
    display: flex;
    margin: 2em 2em;
    
`

export const HistoryMemberPic = styled.div`
    width: 80px;
    height: 80px;
    background-size: 80px 80px;
    border-radius: 50%;
    background-image: url(${({ imgUrl }) => imgUrl ? imgUrl : "none"});
    background-position: center;
`