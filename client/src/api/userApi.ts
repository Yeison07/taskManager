import axiosInstance from "./axiosConfig";

const userApi = axiosInstance

export const registerNewUser = async (userData: object) => {

}

export const getUserByEmail = async (email: string) => {

}

const assignProjectToUser = async (userData: object, email: string) => {
    const config = {

    }
    userApi.get("assignProjectToUser",config)
}

export const getProjectsByEmail = async (inputEmail: string) => {
    const config={
        headers:{
        }
    }
    const res = await userApi.post(`/api/v1/users/getProjectByUserId`,{
        email:inputEmail
    },config)
    return res.data
}

export const getProjectsData = async (projects_ids: []) => {
    const config={
        headers:{
        }
    }
    const res = await userApi.post(`/api/v1/users/getAllProjectsDataById`,
        projects_ids
    ,config)
    return res.data
}

export const getAllTask = async () => {
    const res = await userApi.get(`/api/v1/projects/getAllTasks`)
    return res.data
}

export const updateTaskState = async (taskData:object) => {
    const res = await userApi.put(`/api/v1/projects/updateTaskState`,taskData)
    return res.data
}

