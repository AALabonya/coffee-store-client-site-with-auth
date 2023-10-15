import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";


const Users = () => {
    const loadedUsers = useLoaderData()
    const[users, setUsers] = useState(loadedUsers)
   const handleDelete= id=>{

//make sure user must be deleted
     fetch(`https://coffee-store-server-hccg84062-aklima-akters-projects.vercel.app/user/${id}`,{
        method:"DELETE",
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        if(data.deletedCount >0){
            alert("deleted successfully")
            const remainingUsers = users.filter(user=> user._id !== id)
            setUsers(remainingUsers)
        }
     })
   }
    
    return (
        <div>
            <Header/>

            This is users.{loadedUsers.length}
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(data=> <tr key={data._id}>
            <th>1</th>
            <td>{data.email}</td>
            <td>{data.createdAt}</td>
            <td>{data.lastLoggedAt}</td>
            <td>
                <button onClick={()=>handleDelete(data._id)} className="btn">X</button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;