import styled from "styled-components";
import { Color,Fonts } from "../../app/shared/style_const/style";


export const BoardS = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Color.backgroundMedium};
    justify-content: start;
    padding: 1.5em 1.5em;
    margin: 1em 0.5em;
    min-height: 400px;
    min-width: 320px;
    & > p{
        margin: 0;
        color: ${Color.textDark};
        letter-spacing: -0.5px;
   }
`

export const TaskS = styled.div`
    color: ${Color.textDarkest};
    border: 0.5px solid ${Color.backgroundDark};
    border-radius: 0.2em;
    box-shadow: 2px 2px 5px #00000030;
    background-color: ${Color.backgroundLight};
    width: 290px;
    margin: 0.4em 0;
    padding: 1em 1em;
    font-size: ${Fonts.FONT_SIZE_SMALL}px;
    cursor: pointer !important;
    touch-action: none;
    user-select: none;
    
   &:hover{
    background-color: ${Color.backgroundDark};
   }

   & > img{
    margin: 0em 0.2em;
   }

   @keyframes appear {
  from { 
    transform: translate(-1em,-1em);
  }
}
`

export const TaskSHeader=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3em;
    


    & > div{
        display: flex;
        align-items: center;
    }

    & div{
        margin: 0 0.2em;
    }



  

`