import axios from "axios"


export const getData = async() => {
    const response = await axios.get('http://localhost:5200/todolist') ;
    return response.data ; 
}

export const addData = async(newData) => {
    const response = await axios.post('http://localhost:5200/todolist',newData) ;
    return response.data ;
}

export const edittData = async(newData) => {
    const response = await axios.put(`http://localhost:5200/todolist/${newData.id}`,newData) ;
    return response.data ;
}

export const hapussData = async(id) => {
    await axios.delete(`http://localhost:5200/todolist/${id}`) ;
}