import { Color } from "../../app/shared/style_const/style";
import CardProject from "../cardProject/card-project";
import { TitleS } from "../cardProject/style";
import { Container, ContainerColumn, ContainerFlex } from "../container/style";
import React, { useState, useEffect } from 'react';
import {useNavigate } from "react-router-dom";
import { Board } from "./style";


const ListProjectsArch = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/inicio/nombre_proyecto")
    }

    return ( 
        <ContainerColumn>
        <Container align="flex-start" direction="column" height="auto">
        <div style={{margin:"1em 0em 1em 5em"}}>
            <TitleS>Los siguientes proyectos se encuentran archivados
            </TitleS>
            <hr style={{border:`2px solid ${Color.primary}`}}/>
        </div>
        </Container>
        <Board>

    <ContainerFlex>
        <CardProject onClick={handleClick} state="off"/>
        <CardProject onClick={handleClick} state="off"/>
        <CardProject onClick={handleClick} state="off"/>
        <CardProject onClick={handleClick} state="off"/>
        <CardProject onClick={handleClick} state="off"/>
        <CardProject onClick={handleClick} state="off"/>
    </ContainerFlex>
        </Board>
    </ContainerColumn>
     );
}
 
export default ListProjectsArch;