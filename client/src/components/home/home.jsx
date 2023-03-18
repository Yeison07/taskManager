import { Container, ContainerColumn, ContainerFlex } from "../container/style";
import Login from "../login/login";
import { Color, Fonts } from "../../app/shared/style_const/style";
import ModalTask from "../modal/modal";
import { ContainerHome } from "./style";


const Home = () => {
    return (
        <ContainerHome>
                <ContainerColumn bgcolor={Color.backgroundDark}>
                    <p>
                        Sistema web para el control y seguimiento de los procesos en los semilleros de investigación en el programa de ingenieria de sistemas.
                    </p>
                    <h1>Iniciar sesion</h1>
                    <Login/>
                </ContainerColumn>
                <ContainerFlex bgcolor={Color.backgroundMedium}>
                    <img width={"550px"} src="https://ww2.ufps.edu.co/public/archivos/elementos_corporativos/Logo-nuevo-vertical.png" alt="Logotipo Universidad
                    Francisco de Paula Santander" />
                </ContainerFlex>
            {/*<ModalTask/>*/}
        </ContainerHome>

            
    
    )
} 
 
export default Home;