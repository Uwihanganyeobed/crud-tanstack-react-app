interface PostCardProps{
  name: string;
  email: string;
  onDelete: ()=>void;
  onEdit: ()=>void;
}


const PostCard = ({name, email, onDelete, onEdit}: PostCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md"> 
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={onDelete}>Delete</button>
      <button className="bg-blue-500 text-white px-2 py-1 rounded-md" onClick={onEdit}>Edit</button>
    </div>
  )
}

export default PostCard