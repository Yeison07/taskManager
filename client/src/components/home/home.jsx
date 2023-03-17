import { Container } from "../container/style";
import Login from "../login/login";
import { Color, Fonts } from "../../app/shared/style_const/style";
import ModalTask from "../modal/modal";


const Home = () => {
    return (
        <>
            <Container width="100%">
                <Container bgcolor={Color.backgroundDark} direction="column">
                    <p>
                        Sistema web para el control y seguimiento de los procesos en los semilleros de investigación en el programa de ingenieria de sistemas.
                    </p>
                    <h1>Iniciar sesion</h1>
                    <Login></Login>
                </Container>
                <Container bgcolor={Color.backgroundMedium} width="80%">
                    <img width={"550px"} src="https://ww2.ufps.edu.co/public/archivos/elementos_corporativos/Logo-nuevo-vertical.png" alt="" />
                </Container>
            </Container>
            <ModalTask/>

            
        </>
    )
} 
 
export default Home;