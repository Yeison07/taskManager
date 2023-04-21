import axiosInstance from "./axiosConfig";

const userApi = axiosInstance

userApi.defaults.baseURL="http://localhost:8004"

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
        email:"hola@hotmail.com"
    },config)
    return res.data
}