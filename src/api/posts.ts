import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = async ()=>{
   const {data} = await axios.get(API_URL);
   return data;
}

export const addPost = async (newPost: {title: string, body: string, userId: number})=>{
   const {data} = await axios.post(API_URL, newPost);
   return data;
}

export const getPostById = async (id: number)=>{
   const {data} = await axios.get(`${API_URL}/${id}`);
   return data;
}

export const updatePost = async (id: number, updatedPost: {title: string, body: string, userId: number})=>{
   const {data} = await axios.put(`${API_URL}/${id}`, updatedPost);
   return data;
}

export const deletePost = async(id: number)=>{
   const {data}= await axios.delete(`${API_URL}/${id}`);
   return data;
}