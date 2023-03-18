import CardHistoryMember from "../card-history-member/card-history-member";
import { TitleS } from "../cardProject/style";
import { Container, ContainerColumn, ContainerFlex } from "../container/style";
import { Color } from "../../app/shared/style_const/style";
import { ContainerSearchInput, SearchInput } from "../search/style";
import { Board, CotaninerBoard } from "./style";
import { Search } from "../svg/style";
import Footer from "../footer/footer";

const HistoryMembers = () => {
    return (
        <ContainerColumn>
            <Container align="flex-start" height="auto" direction="column">
                <div style={{margin:"1em 0em 1em 5em"}}>
                    <TitleS>Los siguientes miembros hicieron parte del semillero y no estan activos actualmente</TitleS>
                    <hr style={{border:`2px solid ${Color.primary}`}}/>
                </div>
            </Container>
            <Board>
            <ContainerColumn>
                 <TitleS >Historial de miembros</TitleS>
                <ContainerSearchInput>
                <SearchInput placeholder="Buscar..." />
                <Search/>
                </ContainerSearchInput>
                <ContainerFlex >
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                    <CardHistoryMember></CardHistoryMember>
                </ContainerFlex>
             
            </ContainerColumn>
            
            </Board>
        </ContainerColumn>
    );
}

export default HistoryMembers;