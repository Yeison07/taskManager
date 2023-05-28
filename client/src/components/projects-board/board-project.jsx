import { Container, ContainerColumn, ContainerFlex } from "../container/style";
import imgUrl from "../../app/shared/img/profile_pic.jpg"
import { BoardS, TaskS, TaskSHeader } from "./style";
import { Color } from "../../app/shared/style_const/style";
import React, { useState, useEffect } from 'react';
import { TitleS } from "../cardProject/style";
import { ProfileContainer } from "../cardmember/style";
import { createPortal } from 'react-dom';
import { useMutation, useQuery } from "@tanstack/react-query";
import interact from 'interactjs'
import ModalTask from "../modal/modal";
import { ModalPosition } from "../modal/style";
import { getAllTask, updateTaskState } from "../../api/userApi";

const BoardProject = () => {
    const [modalIsOpen, setModalIsOpen] = useState(null)
    const position = { x: 0, y: 0 }
    const initialPosition = { x: 0, y: 0 }
    const [task,setTask] = useState({
        id: "",
        status: {
            id: ""
        }
    })
   
    const { data: projectData, error: errorData, isLoading } = useQuery({
        queryKey: ["tasks"],
        queryFn: getAllTask
    })

    const taskSave = useMutation({
        mutationKey: ["taskSave"],
        mutationFn: updateTaskState
    })

    const loadTasks = () => {
        if (isLoading) {
            return <p>Cargado espera un momento</p>
        }
        else if (errorData) {
            return <p>Ocurrió un problema con el servidor, intenta más tarde</p>
        }
        else {
            return projectData.map((elem) => {
                return <TaskS id={elem.id} key={elem.id} className="drag" onClick={() => { setModalIsOpen(true) }}>
                    <p>{elem.description}</p>
                    <img width="20" src={imgUrl} alt="" />
                    <img width="20" src={imgUrl} alt="" />
                    <img width="20" src={imgUrl} alt="" />
                </TaskS>
            })
        }
    }

    const dragAndDrop = () => {
        interact('.drag').draggable({
            listeners: {
                start(event) {
                    initialPosition.x = event.dx
                    initialPosition.y = event.dy
                },
                move(event) {
                    position.x += event.dx
                    position.y += event.dy
                    event.target.style.transform =
                        `translate(${position.x}px, ${position.y}px)`
                    event.target.style.transform +=
                        `rotate(5deg)`
                    event.target.style.zIndex = `2`
                    event.target.style.transition = `transform 60ms`
                },
                end(event) {
                    event.target.style.transform =
                        `translate(${initialPosition.x}px, ${initialPosition.y}px)`
                    position.x = 0
                    position.y = 0
                    event.target.style.zIndex = `1`
                    event.target.style.animation = "appear 300ms"
                },

            }
        })

        interact('.drop')
            .dropzone({
                ondrop: function (event) {
                    event.target.insertAdjacentElement('beforeend', event.relatedTarget)
                    let newTask={
                        id:event.relatedTarget.id,
                        status:{
                            id:task.status.id = event.target.id
                        }
                    }
                    setTask(newTask)                  
                }
            })
            .on('dropactivate', function (event) {
                event.target.classList.add('drop-activated')
            })
    }

    dragAndDrop()

    const handleClose = () => {
        let answer = confirm("¿Estas seguro de que deseas borrar esta tarea?, el proceso es irreversible")
        if (answer) {
            setModalIsOpen(false)
        }
        return

    }

    useEffect(()=>{
        if(task.id=="" || task.status===""){
            return
        }
        else{
            taskSave.mutate(task)
            console.log(task);
        }
    },[task])

    useEffect(() => {
        if (modalIsOpen) document.body.style.overflow = "hidden"
        else if (!modalIsOpen) document.body.style.overflow = ""
    }, [modalIsOpen]);



    return (
        <ContainerColumn bgcolor={Color.backgroundWhite}>
            <Container justify="flex-start" align="flex-start" direction="column" height="auto">
                <TaskSHeader>
                    <p>Projects / Project_Name / Board</p>
                    <TitleS>Lista de tareas</TitleS>
                    <div>
                        <ProfileContainer width="40px" height="40px" imgUrl={imgUrl} />
                        <ProfileContainer width="40px" height="40px" imgUrl={imgUrl} />
                        <ProfileContainer width="40px" height="40px" imgUrl={imgUrl} />
                        <p>Only my tasks</p>
                    </div>
                </TaskSHeader>
            </Container>
            <ContainerFlex>

                <Container align="flex-start" height="auto" wrap="wrap">
                    <BoardS id="1" className="drop">
                        <p>BACKLOG</p>
                        {loadTasks()}
                    </BoardS>
                    <BoardS id="2" className="drop">
                        <p>ASIGNADA</p>

                    </BoardS>
                    <BoardS id="3" className="drop">
                        <p>EN PROCESO</p>

                    </BoardS>
                    <BoardS id="4" className="drop">
                        <p>COMPLETA</p>
                    </BoardS>
                </Container>
            </ContainerFlex>

            {modalIsOpen && createPortal(
                <ModalPosition>
                    <ModalTask onClose={handleClose} />
                </ModalPosition>, document.body
            )}
        </ContainerColumn>
    );
}
export default BoardProject;