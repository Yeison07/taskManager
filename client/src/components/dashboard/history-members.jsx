import React, { useState, useEffect,useRef } from 'react';
import CardHistoryMember from "../card-history-member/card-history-member";
import { TitleS } from "../cardProject/style";
import { Container, ContainerColumn, ContainerFlex } from "../container/style";
import { Color } from "../../app/shared/style_const/style";
import { ContainerSearchInput, SearchInput } from "../search/style";
import { Board, CotaninerBoard } from "./style";
import { Search } from "../svg/style";


const HistoryMembers = () => {

    const [inputFocus, setinputFocus] = useState(null);
    const inputRef=useRef(null);
    
    const inputIsOnFocus=(focus)=>{
        if(inputFocus!==null && !focus){
            setinputFocus(false)
        }
        else setinputFocus(true)
    }

    useEffect(() => {
        if(inputFocus) 
        {
         inputRef.current.style.borderColor="red"
         inputRef.current.style.transform="translateX(0.5em)"
         inputRef.current.style.animation="inputFocus"
         
        }
        else if(!inputFocus) {
            inputRef.current.style.borderColor=""
            inputRef.current.style.transform="translateX(-0.5em)"
            setinputFocus(null)
        }
        return ()=>{
        }
    }, [inputFocus]);

    return (
        <ContainerColumn>
            <Container align="flex-start" height="auto" direction="column">
                <div style={{margin:"1em 0em 1em 5em"}}>
                    <TitleS>Los siguientes miembros hicieron parte del semillero y no estan activos actualmente</TitleS>
                    <hr style={{border:`2px solid ${Color.primary}`}}/>
                </div>
            </Container>
            <Board>
            <ContainerColumn>
                 <TitleS >Historial de miembros</TitleS>
                <ContainerSearchInput ref={inputRef}>
                <SearchInput placeholder="Buscar..." 
                onBlur={()=>{inputIsOnFocus(false)}} 
                onFocus={()=>{inputIsOnFocus(true)}}/>
                <Search/>
                </ContainerSearchInput>
                <ContainerFlex >
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                </ContainerFlex>
            </ContainerColumn>
            </Board>
        </ContainerColumn>
    );
}

export default HistoryMembers;