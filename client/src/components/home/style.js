import styled from 'styled-components'
import { Color } from '../../app/shared/style_const/style'

export const ContainerHome=styled.div`
    min-height: 100vh;
    display: grid;
    width: 100%;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;

    :nth-child(1){
        img{
            margin: 0 auto;
        }
        
    }
`

export const HomeTitle=styled.p`
    margin: 0;
    margin-bottom: 0.4em;
    font-family: 'Heebo',sans-serif;
    font-size: 7em;
    font-weight: 500;
    color: ${Color.primary};
    
    span:first-child{
        color: ${Color.darkShadow};
        padding: 0 0.3em;
        background-color: #00000010;

    }

`