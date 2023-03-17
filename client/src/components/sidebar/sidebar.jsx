import { Person,Task,FolderOpen,Group,PersonOff } from "../svg/style";
import React from 'react';
import {LinkOption, SideBarMenu } from "./style";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const navigate = useNavigate();
    return (  
        
            <SideBarMenu>
            <LinkOption >
            <Person/>
            <p>Usuario</p>
            </LinkOption>
            <LinkOption onClick={() => navigate('lista_proyectos')} >
                <Task/>
                <p>Proyectos en curso</p>
                </LinkOption>
            <LinkOption  onClick={() => navigate('lista_proyectos_inactivos')}>
                <FolderOpen/>
                <p>Proyectos archivados</p>
                </LinkOption>
            <LinkOption onClick={() => navigate('miembros_activos')}>
                <Group/>
                Miembros activos</LinkOption>
            <LinkOption onClick={() => navigate('historial_miembros')}>
                <PersonOff/>
                <p>Historial de miembros</p>
                </LinkOption>
            </SideBarMenu>
        
    );
}
 
export default SideBar;