import CardMember from "../cardmember/card-member";
import { TitleS } from "../cardProject/style";
import { Container, ContainerColumn, ContainerFlex } from "../container/style";
import { Color } from "../../app/shared/style_const/style";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../app/utils/helpHttp";
import { Board } from "./style";



const ListMembersActive = () => {
    const [data, setData] = useState([]);
    let api= helpHttp();
    let url = "http://localhost:9000/api/users"

    useEffect(() => {
        api
          .get(url)
          .then((res) => {
            console.log( res);
            if (res.err) {
                setData(res)
              console.log(data)
            } else {
                setData(null)
            }
          });
      }, []);

    return (
            <ContainerColumn>
                <Container direction="column" align="flex-start" height="auto">
                    <div style={{ margin: "1em 0em 1em 5em" }}>
                        <TitleS>Los siguientes miembros se encuentran activos en el semillero</TitleS>
                        <hr style={{ border: `2px solid ${Color.primary}` }} />
                    </div>
                </Container>
                <Board>
                {/* Verificar por fuera del container y pintar el error o las card dependiendo*/}
                <ContainerFlex>
                    
                    {data===null ? <p>Estamos experimentando problemas, por favor intenta más tarde</p> :
                        data.map((el) => <CardMember key={el.id} data={el} />)}

                </ContainerFlex>
                        </Board>
            </ContainerColumn>
    );
}

export default ListMembersActive;