import { CardProjectS, DescriptionText, TitleS } from "./style";
import React, { useState, useEffect } from 'react';
import { FolderSpecial,FolderOff } from "../svg/style";

const CardProject = ({state,onClick}) => {
    const [estado, setEstado] = useState(state);
    return (
        <CardProjectS onClick={onClick}>
            {estado === "off" ? <FolderOff/> : <FolderSpecial/>}
            
            <div>
                <TitleS>Title</TitleS>
                <hr />
                <DescriptionText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam pariatur odit culpa illo et dolores, modi repellendus fugit distinctio voluptatibus. Dolorem culpa, enim reprehenderit quaerat nostrum debitis perferendis ea libero.
                </DescriptionText>
            </div>
            <hr style={{height:"250px"}} />
            
        </CardProjectS>);
}

export default CardProject;