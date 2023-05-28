import { Color } from "../../app/shared/style_const/style";
import CardProject from "../cardProject/card-project";
import { TitleS } from "../cardProject/style";
import { Container, ContainerColumn, ContainerFlex } from "../container/style";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Board } from "./style";
import { useQuery } from "@tanstack/react-query";
import { getProjectsByEmail, getProjectsData } from "../../api/userApi";


const ListProjects = () => {
    const navigate = useNavigate()
    const email = "hola@hotmail.com"
    let projects_ids=null
    const { data, error, isLoading } = useQuery({
        queryKey: ["projects",email],
        queryFn: () => getProjectsByEmail(email)
    })
    projects_ids=data
    
    const { data:projectsData, errorProject, isLoadingProject } = useQuery({
        queryKey: ["projects"],
        queryFn: () => getProjectsData(data),
        enabled:!!projects_ids
    })

    
    const handleClick = () => {
        navigate("/inicio/nombre_proyecto")
    }

    const getAllProjects = () => {
        if (isLoadingProject && isLoading) {
            return <p>Espera un momento, cargando...</p>
        }

        if (errorProject && error) {
            return <p>Ocurrio un error intenta más tarde</p>
        }

        else if(projectsData){
            return projectsData.map((elem) => {
                return <CardProject key={elem.id} project={elem} onClick={handleClick} />
            })
        }
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
                    {getAllProjects()}
                </ContainerFlex>
            </Board>
        </ContainerColumn>
    );
}

export default ListProjects;