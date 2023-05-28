import { CardProjectS, DescriptionText, TitleS } from "./style";
import React, { useState, useEffect } from 'react';
import { FolderSpecial,FolderOff } from "../svg/style";

const CardProject = ({state,onClick,project}) => {
    const [estado, setEstado] = useState(state);
    return (
        <CardProjectS onClick={onClick}>
            {estado === "off" ? <FolderOff/> : <FolderSpecial/>}
            
            <div>
                <TitleS>{project.title}</TitleS>
                <hr />
                <DescriptionText>{project.description}
                </DescriptionText>
            </div>
            <hr style={{height:"250px"}} />
            
        </CardProjectS>);
}

export default CardProject;