import { AddMemberIcon, CloseModalIcon, IconAssignees, ModalAssignees, ModalBody, ModalDescription, ModalHeader, ModalS, ModalSubTitle, ModalTaskId, ModalTitle } from "./style";
import imgUrl from "../../app/shared/img/profile_pic.jpg"
const ModalTask = ({onClose}) => {
    return ( 
        <ModalS>
            <ModalHeader>
                <ModalTaskId>TASK-1321312</ModalTaskId>
                <CloseModalIcon onClick={onClose}>X</CloseModalIcon>
            </ModalHeader>
            <ModalBody>
                <div>
                    <ModalTitle>Inserte here task name title</ModalTitle>
                    <ModalDescription>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Possimus omnis dicta deleniti magnam sed molestias officiis expedita quis minus,
                        suscipit vero natus iusto porro repellendus cumque laborum praesentium neque assumenda.
                    </ModalDescription>
                </div>
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
                <ModalSubTitle>Encargado tarea</ModalSubTitle>
                <IconAssignees>
                <img width="20" src={imgUrl} alt="" />
                    <p>Jose Feliciano</p>
                </IconAssignees>
                </ModalAssignees>            
            </ModalBody>
        </ModalS> 
    )
}
 
export default ModalTask;