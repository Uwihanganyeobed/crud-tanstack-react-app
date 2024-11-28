import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";


export const fetchUsers = async ()=>{
   const {data} = await axios.get(API_URL);
   console.log(data)
   return data;
}

export const addUser = async (newUser: {name: string, email: string})=>{
   const {data} = await axios.post(API_URL, newUser);
   console.log(data)
   return data;
}

export const deleteUser = async (id: number)=>{
   await axios.delete(`${API_URL}/${id}`);
}

export const getUserById = async (id: number)=>{
   const {data} = await axios.get(`${API_URL}/${id}`);
   return data;
}

export const updateUser = async ({id, name, email}: {id: number, name: string, email: string})=>{
   const {data} = await axios.put(`${API_URL}/${id}`, {name, email});
   return data;
}
