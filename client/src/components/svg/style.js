import styled, { css } from "styled-components";
import { ReactComponent as FolderOffIcon } from '../../app/shared/svg_icons/folder_off.svg';
import { ReactComponent as FolderOpenIcon } from '../../app/shared/svg_icons/folder_open.svg';
import { ReactComponent as FolderSpecialIcon } from '../../app/shared/svg_icons/folder_special.svg';
import { ReactComponent as GroupAddIcon } from '../../app/shared/svg_icons/group_add.svg';
import { ReactComponent as GroupIcon } from '../../app/shared/svg_icons/group.svg';
import { ReactComponent as PersonOffcon } from '../../app/shared/svg_icons/person_off.svg';
import { ReactComponent as PersonIcon } from '../../app/shared/svg_icons/person.svg';
import { ReactComponent as SearchIcon } from '../../app/shared/svg_icons/search.svg';
import { ReactComponent as TaskIcon } from '../../app/shared/svg_icons/task.svg';
import { ReactComponent as TrashIcon } from '../../app/shared/svg_icons/trash.svg';
import { Color } from "../../app/shared/style_const/style";


const svgStyles = ({width, height, color, hoverColor }) => {
    return css`
    height: ${height || "50px"};
    width: ${width || ""};
    path {
        fill: ${color || ""};
    }
    &:hover path{
        fill: ${hoverColor || ""} ;
        
    }
    `
}



export const FolderOff = styled(FolderOffIcon)`
    ${(props) => svgStyles({ height:"120px",width:"600px" })}
`
export const FolderOpen = styled(FolderOpenIcon)`
    ${(props) => svgStyles({  })}
`
export const FolderSpecial = styled(FolderSpecialIcon)`
    ${(props) => svgStyles({ height:"120px",width:"600px" })}
`
export const GroupAdd = styled(GroupAddIcon)`
   ${(props) => svgStyles({  })}
`
export const Group = styled(GroupIcon)`
    ${(props) => svgStyles({  })}
`
export const PersonOff = styled(PersonOffcon)`
    ${(props) => svgStyles({  })}
`
export const Person = styled(PersonIcon)`
    ${(props) => svgStyles({ color:"#fff" })}
`

export const Search = styled(SearchIcon)`
    ${(props) => svgStyles({ width:"35px",height:"35px"})}
`
export const Task = styled(TaskIcon)`
    ${(props) => svgStyles({  })}
`
export const Trash = styled(TrashIcon)`
    ${(props) => svgStyles({ width:"25px",height:"25px"})}
    :hover{
        background-color: ${Color.backgroundDark};
    }
`






