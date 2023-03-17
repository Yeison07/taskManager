import { Container } from "../container/style";
import imgUrl from "../../app/shared/img/profile_pic.jpg"
import { BoardS, TaskS, TaskSHeader } from "./style";
import { Color } from "../../app/shared/style_const/style";
import React, { useState, useEffect } from 'react';
import { TitleS } from "../cardProject/style";
import { ProfileContainer } from "../cardmember/style";

import interact from 'interactjs'

const BoardProject = () => {
    
    const position = { x: 0, y: 0 }
    const initialPosition = { x: 0, y: 0 }
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
                    event.target.style.zIndex=`2`
        event.target.style.transition=`transform 60ms`

               
                    
            },
            end(event) {
                event.target.style.transform =
                    `translate(${initialPosition.x}px, ${initialPosition.y}px)`
                position.x = 0
                position.y = 0
                event.target.style.zIndex=`1`
                event.target.style.animation= "appear 300ms"
            },

        }
    })

    interact('.drop')
  .dropzone({
    ondrop: function (event) {
        console.log()
        event.target.insertAdjacentElement('beforeend', event.relatedTarget)
    }
  })
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated')
  })
    useEffect(() => {

    }, []);


    const openModal = () => {


    }

    return (
        <Container height="auto" bgcolor={Color.backgroundLight} direction="column">
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
            <Container align="flex-start" height="auto" wrap="wrap">
                <BoardS className="drop">
                    <p>BACKLOG</p>
                    <TaskS className="drag" onClick={openModal}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                </BoardS>
                <BoardS className="drop">
                    <p>ASIGNADA</p>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                </BoardS>
                <BoardS className="drop">
                    <p>EN PROCESO</p>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                </BoardS>
                <BoardS className="drop">
                    <p>COMPLETA</p>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                    <TaskS className="drag">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident possimus ratione dicta aliquid non harum odit ut. Ex vero illum amet laudantium ea minus ab qui reiciendis, consequuntur necessitatibus?</p>
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                        <img width="20" src={imgUrl} alt="" />
                    </TaskS>
                </BoardS>
            </Container>

        </Container>
    );
}

export default BoardProject;