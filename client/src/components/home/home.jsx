import {ContainerColumn, ContainerFlex } from "../container/style";
import Login from "../login/login";
import { Color, Fonts } from "../../app/shared/style_const/style";
import { ContainerHome } from "./style";
import { TitleS } from "../cardProject/style";


const Home = () => {
    return (
        <ContainerHome>
                <ContainerColumn bgcolor={Color.backgroundDark}>
                <p>TaskMe!</p>
                    <Login/>
                </ContainerColumn>
                <ContainerFlex bgcolor={Color.backgroundMedium}>
                    <img width={"550px"} src="https://ww2.ufps.edu.co/public/archivos/elementos_corporativos/Logo-nuevo-vertical.png" alt="Logotipo Universidad
                    Francisco de Paula Santander" />
                </ContainerFlex>
            
        </ContainerHome>

            
    
    )
} 
 
export default Home;