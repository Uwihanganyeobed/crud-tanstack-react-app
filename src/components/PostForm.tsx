import { useState } from "react"

interface PostFormProps{
   onAddUser: (name: string, email: string)=>void;
}

const PostForm = ({onAddUser}: PostFormProps) => {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")

   const handleSubmit = (e: React.FormEvent)=>{
      e.preventDefault();

      if(name && email){
        onAddUser(name, email);
        setEmail("");
        setName("");
      }
   }
  return (
   <form onSubmit={handleSubmit} className="p-4 border rounded-md mb-4">
   <input
     type="text"
     placeholder="Enter name"
     value={name}
     onChange={(e) => setName(e.target.value)}
     className="border p-2 w-full rounded mb-4"
   />
   <input
   type="text"
     placeholder="Enter Email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="border p-2 w-full rounded mb-4"
   />
   <button
     type="submit"
     className="bg-blue-500 text-white py-2 px-4 rounded"
   >
     Add User
   </button>
 </form>
  )
}

export default PostForm