import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Header from "./Header";

const SignUp = () => {

    const{signUp} = useContext(AuthContext)


    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target 
        const email = form.email.value 
          const password = form.password.value
        console.log( email, password);


         signUp(email, password)
         .then(result=>{
            console.log(result.user);
            //new user has been created
            const createdAt = result.user?.metadata?.creationTime;
            const user={email, createdAt: createdAt}
            fetch("https://coffee-store-server-hccg84062-aklima-akters-projects.vercel.app/user",{
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body:JSON.stringify(user)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
            })
         })
         .catch(error=>console.log(error))
    }
    return (
        <div>
            <Header/>
         <h2>PLease SignUp</h2>
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
  
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
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

export default SignUp;