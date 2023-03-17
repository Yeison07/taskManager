import React from "react";
import {createBrowserRouter,Route,RouterProvider} from 'react-router-dom'
import DashBoard from "../components/dashboard/dashborad";
import HistoryMembers from "../components/dashboard/history-members";
import ListMembersActive from "../components/dashboard/list-members-actives";
import ListProjects from "../components/dashboard/list-projects";
import ListProjectsArch from "../components/dashboard/list-projects-arch";

import Home from "../components/home/home";
import BoardProject from "../components/projects-board/board-project";


export const Router= createBrowserRouter([
    {
        path:"/",
        element:<Home />  
    },
    {
        path:"/inicio",
        element:<DashBoard />,
        children:[
            {
                path:"/inicio/lista_proyectos",
                element:<ListProjects ></ListProjects>,
            },
            {
                path:"/inicio/lista_proyectos_inactivos",
                element:<ListProjectsArch/>
            },
            {
                path:"/inicio/miembros_activos",
                element:<ListMembersActive></ListMembersActive>
            },
            {
                path:"/inicio/historial_miembros",
                element:<HistoryMembers></HistoryMembers>
            
            },
            {
                path:"/inicio/nombre_proyecto",
                element:<BoardProject></BoardProject>
            }
        ]
    }
    ]);