import { AddMemberIcon, CloseModalIcon, IconAssignees, ModalAssignees, ModalBody, ModalBodyContent, ModalDescription, ModalHeader, ModalS, ModalSubTitle, ModalTaskId, ModalTitle } from "./style";
import imgUrl from "../../app/shared/img/profile_pic.jpg"
import { Trash } from "../svg/style";
const ModalTask = ({onClose}) => {
    return ( 
        <ModalS>
            <ModalHeader>
                <ModalTaskId>TASK-1321312</ModalTaskId>
                <Trash/>
                <CloseModalIcon>X</CloseModalIcon>
            </ModalHeader>
            <ModalBody>
                <ModalBodyContent>

                    <ModalTitle>Inserte here task name title</ModalTitle>
                    <ModalDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Possimus omnis dicta deleniti magnam sed molestias officiis expedita quis minus,
                        suscipit vero natus iusto porro repellendus cumque laborum praesentium neque assumenda.
                    </ModalDescription>
                    <ModalDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Possimus omnis dicta deleniti magnam sed molestias officiis expedita quis minus,
                        suscipit vero natus iusto porro repellendus cumque laborum praesentium neque assumenda.
                    </ModalDescription>
                    <ModalDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Possimus omnis dicta deleniti magnam sed molestias officiis expedita quis minus,
                        suscipit vero natus iusto porro repellendus cumque laborum praesentium neque assumenda.
                    </ModalDescription>
                    <ModalDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Possimus omnis dicta deleniti magnam sed molestias officiis expedita quis minus,
                        suscipit vero natus iusto porro repellendus cumque laborum praesentium neque assumenda.
                    </ModalDescription>
                    <ModalDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Possimus omnis dicta deleniti magnam sed molestias officiis expedita quis minus,
                        suscipit vero natus iusto porro repellendus cumque laborum praesentium neque assumenda.
                    </ModalDescription>
                </ModalBodyContent>
                <ModalBodyContent>
            <ModalAssignees>
                <ModalSubTitle>Miembros asignados</ModalSubTitle>
                <IconAssignees>
                <img width="20" src={imgUrl} alt="" />
                    <p>Jose Feliciano</p>
                </IconAssignees>
                <IconAssignees>
                <img width="20" src={imgUrl} alt="" />
                    <p>Jose Feliciano</p>
                </IconAssignees>
                <IconAssignees>
                <img width="20" src={imgUrl} alt="" />
                    <p>Jose Feliciano</p>
                </IconAssignees>
                <AddMemberIcon>Añadir miembro</AddMemberIcon>
                </ModalAssignees>            
                    <ModalSubTitle>Encargado tarea</ModalSubTitle>
                <ModalAssignees>
                    <IconAssignees>
                    <img width="20" src={imgUrl} alt="" />
                        <p>Jose Feliciano</p>
                    </IconAssignees>
                </ModalAssignees>
                </ModalBodyContent>
            </ModalBody>
        </ModalS> 
    )
}
 
export default ModalTask;