import { Color } from "../../app/shared/style_const/style";
import CardProject from "../cardProject/card-project";
import { TitleS } from "../cardProject/style";
import { Container } from "../container/style";
import Footer from "../footer/footer";
import React, { useState, useEffect } from 'react';
import {Link } from "react-router-dom";


const ListProjectsArch = () => {
    return ( 
        <Container 
         bgcolor={Color.backgroundDark}  direction="column" height="auto">
        <Container align="flex-start" direction="column" height="auto">
        <div style={{margin:"1em 0em 1em 5em"}}>
            <TitleS>Los siguientes proyectos se encuentran archivados
            </TitleS>
            <hr style={{border:`2px solid ${Color.primary}`}}/>
        </div>
        </Container>
    <Container bgcolor="#FFF" wrap="wrap" width="90%" height="auto" min="100vh">
        <Link to={"/inicio/nombre_proyecto"}>
        <CardProject state="off"/>
        </Link>
        <Link to={"/inicio/nombre_proyecto"}>
        <CardProject state="off"/>
        </Link>
        <Link to={"/inicio/nombre_proyecto"}>
        <CardProject state="off"/>
        </Link>
        <Link to={"/inicio/nombre_proyecto"}>
        <CardProject state="off"/>
        </Link>
        <Link to={"/inicio/nombre_proyecto"}>
        <CardProject state="off"/>
        </Link>
        <Link to={"/inicio/nombre_proyecto"}>
        <CardProject state="off"/>
        </Link>
        
    </Container>
    <Footer/>
    </Container>
     );
}
 
export default ListProjectsArch;