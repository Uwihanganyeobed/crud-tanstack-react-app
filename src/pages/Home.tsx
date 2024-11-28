import { useQuery, useMutation } from "@tanstack/react-query"
import { fetchUsers, addUser, deleteUser, updateUser } from "../api/users"
import PostForm from "../components/PostForm"
import PostCard from "../components/PostCard"
import UpdateUserForm from "../components/UpdateUserForm"
import { useState, useEffect } from 'react'

// Add this interface before the Home component
interface User {
  id: number;
  name: string;
  email: string;
}

const Home = () => {
   const [localUsers, setLocalUsers] = useState<User[]>([])
   const [editingUserId, setEditingUserId] = useState<number | null>(null)

   const {data: users=[], isLoading}= useQuery({
      queryKey: ['users'],
      queryFn: fetchUsers
   })

   useEffect(() => {
     if (users.length > 0) {
       setLocalUsers(users)
     }
   }, [users])

   const addUserMutation = useMutation({
      mutationFn: addUser,
      onSuccess: (newUser) => {
        setLocalUsers(prev => [...prev, { ...newUser, id: Date.now() }])
      }
   })

   const deleteUserMutation = useMutation({
      mutationFn: deleteUser,
      onSuccess: (_, userId) => {
        setLocalUsers(prev => prev.filter(user => user.id !== userId))
      }
   })

   const updateUserMutation = useMutation({
     mutationFn: updateUser,
     onSuccess: (updatedUser) => {
       setLocalUsers(prev => 
         prev.map(user => user.id === updatedUser.id ? updatedUser : user)
       )
       setEditingUserId(null)
     }
   })

   const handleAddPost = (name: string, email: string)=>{
      addUserMutation.mutate({name, email});
   }

   const handleDeleteUser = (id: number)=>{
      deleteUserMutation.mutate(id);
   }

   const handleUpdateUser = (id: number, name: string, email: string) => {
     updateUserMutation.mutate({ id, name, email })
   }

   if(isLoading) return <div>Loading...</div>

  return (
   <div className="max-w-2xl mx-auto p-4">
   <PostForm onAddUser={handleAddPost} />
   <div className="space-y-4">
     {localUsers.map((user) => (
       editingUserId === user.id ? (
         <UpdateUserForm
           key={user.id}
           user={user}
           onUpdateUser={handleUpdateUser}
           onCancel={() => setEditingUserId(null)}
         />
       ) : (
         <PostCard
           key={user.id}
           name={user.name}
           email={user.email}
           onDelete={() => handleDeleteUser(user.id)}
           onEdit={() => setEditingUserId(user.id)}
         />
       )
     ))}
   </div>
 </div>
  )
}

export default Home