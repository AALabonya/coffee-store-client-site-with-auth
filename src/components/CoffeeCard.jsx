/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    
    const [users,setUsers]=useState(coffee)
    const { _id,name, supplier, category, quantity, details, Photo, taste } = users || {}
   

    const handleDelete = _id =>{
    //    console.log("delete", _id);
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
       
        fetch(`https://coffee-store-server-hccg84062-aklima-akters-projects.vercel.app/coffee/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                 Swal.fire(
                   'Deleted!',
                   'Your Coffee has been deleted.',
                    'success'
          )
          const remaining = coffees.filter(user=>user._id !==_id)
          setCoffees(remaining)
            }
           
        })


        
        }
      })


    }



    return (
        <div>
            <Header/>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={Photo} alt="Movie" /></figure>
                <div className=" flex justify-between w-full pr-4 gap-6">
                   <div>
                   <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                   </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn">View</button>
                            <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                            
                            <button  onClick={()=>handleDelete(_id)}
                            className="btn bg-red-500">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;