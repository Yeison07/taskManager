import styled from 'styled-components'

export const ContainerHome=styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: auto;

    :nth-child(1){
        img{
            margin: 0 auto;
        }
        
    }
`