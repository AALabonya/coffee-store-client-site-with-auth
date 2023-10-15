import { useContext } from "react";
import Header from "./Header";
import { AuthContext } from "../AuthProvider/AuthProvider";


const SignIn = () => {

    const{signIn} = useContext(AuthContext)


    const handleLogIn = event =>{
        event.preventDefault();
        const form = event.target 
        const email = form.email.value 
          const password = form.password.value
        console.log( email, password);
 signIn(email, password)
 .then(result=>{
    console.log(result.user);
    const user ={
        email,
        lastLoggedAt: result.user?.metadata?.lastSignInTime
    }
    fetch("https://coffee-store-server-hccg84062-aklima-akters-projects.vercel.app/user",{
        method:"PATCH",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
 })
  .catch(error=>console.log(error))
    }
    return (
        <div>
            <Header/>
<h2>Please SignIn</h2>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Sign In now!</h1>
  
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;