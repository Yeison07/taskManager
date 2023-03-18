import { Color } from "../../app/shared/style_const/style";
import CardProject from "../cardProject/card-project";
import { TitleS } from "../cardProject/style";
import { Container, ContainerColumn, ContainerFlex } from "../container/style";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Board } from "./style";


const ListProjects = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/inicio/nombre_proyecto")
    }


    return (
        <ContainerColumn >
            <Container align="flex-start" direction="column" height="auto">
                <div style={{ margin: "1em 0em 1em 5em" }}>
                    <TitleS>Los siguientes proyectos estan en curso a la fecha
                    </TitleS>
                    <hr style={{ border: `2px solid ${Color.primary}` }} />
                </div>
            </Container>
            <Board>
                <ContainerFlex>
                    <CardProject onClick={handleClick} />
                    <CardProject onClick={handleClick}/>
                    <CardProject onClick={handleClick}/>
                    <CardProject onClick={handleClick}/>
                    <CardProject onClick={handleClick}/>
                    <CardProject onClick={handleClick}/>
                </ContainerFlex>
            </Board>
        </ContainerColumn>
    );
}

export default ListProjects;