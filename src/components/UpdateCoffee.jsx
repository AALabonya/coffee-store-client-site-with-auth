/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "./Header";

const UpdateCoffee = () => {
    const loaderData = useLoaderData()
    const { _id,name, supplier, category, quantity, details, Photo, taste } = loaderData || {}
    const handleUpdateCoffee = event =>{
        event.preventDefault()

        const form= event.target 

        const name = form.name.value 
        const quantity = form.quantity.value 
        const supplier = form.supplier.value 
        const taste = form.taste.value 
        const category = form.category.value 
        const details = form.details.value
        const Photo = form.photo.value
         
        const newCoffee={name,quantity,supplier, taste,category, details, Photo}

        console.log(newCoffee);

        // send  data to the server 
        fetch(`https://coffee-store-server-hccg84062-aklima-akters-projects.vercel.app/coffee/${_id}`,{
            method:"PUT",
            headers:{
                "content-type" :"application/json"
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
            <Header/>
            <h2>Update a Coffee: {name}</h2>
            <div>
            <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update a Coffee</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* from name and quantity */}
               <div className="md:flex gap-10 mb-8">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="w-full input input-bordered" />
                    </label>
                </div>

                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity"defaultValue={quantity} placeholder="Available Quantity" className="w-full input input-bordered" />
                    </label>
                </div>
               </div>

               {/* from supplier and taste row */}
               <div className="md:flex gap-10 mb-8">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Coffee Name" className="w-full input input-bordered" />
                    </label>
                </div>

                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="w-full input input-bordered" />
                    </label>
                </div>
               </div>
               {/* from category and details row */}
               <div className="md:flex gap-10 mb-8">
               <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category"defaultValue={category} placeholder="category" className="w-full input input-bordered" />
                    </label>
                </div>

                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details"defaultValue={details} placeholder="details" className="w-full input input-bordered" />
                    </label>
                </div>
               </div>
               {/* from Photo URL row */}
               <div className="mb-8">
               <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={Photo} placeholder="PhotoURL" className="w-full input input-bordered" />
                    </label>
                </div>

            
               </div>
               <input type="submit" value="Update COFFEE"  className="btn btn-block bg-[#D2B48C]"/>
               
            </form>
        </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;