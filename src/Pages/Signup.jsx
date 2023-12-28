import HomeLayout from "../Layouts/HomeLayout";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createAccount } from "../Redux/Slices/AuthSlice";

async function Signup(){

    // const [previewImage , setPreviewImage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupData , setSignupData] = useState({
        fullName:"",
        email:" ",
        password:" "
    });

    function handleUserInput(e){

        const {name , value} = e.target;
        setSignupData({
            ...signupData,
            [name]:value
        })

    }

     async function createNewAccount(event){
        event.preventDefault();
        if(!signupData.email || !signupData.fullName || !signupData.password)
        {
            toast.error("Please fill all the details");
            return;
        }

        // checking name field length

        if(signupData.length < 5)
        {
            toast.error("Name should be atleast of 5 characters");
            return;
        }

        // checking email validation

        if(!signupData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        {
            toast.error("Invalid email id")
            return;
        }

        // checking password validation

        if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/))
        {
            toast.error("Invalid password provided, password should 6-16 character long with atleast a number and a special character")
            return;
        }

        const formData = new FormData();
        formData.append("fullName",signupData.fullName);
        formData.append("Email",signupData.email);
        formData.append("password",signupData.password);
        // formData.append("Avatar",signupData.avatar);

        // dispatch create account action
        const response =await dispatch(createAccount(formData))
        if(response?.payload?.success)
            navigate("/");

        setSignupData({
            fullName:" ",
            email:" ",
            password:" ",
            // avatar:" "
        });

        // setPreviewImage("");


    }



    return(
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh] ">
                <form noValidate  onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className="text-center text-2xl font-bold ">Registration Page</h1>
                      {/* <label htmlFor="image_uploads" className="cursor-pointer">
                        { previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage}/>
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label> */}

                    {/* <input
                        onChange={getImage}
                        type="file" 
                        className="hidden"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    /> */}

                        <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">FullName</label>
                        <input 
                          type="text" 
                          required
                          name="fullName"
                          id="fullName"
                          placeholder="Enter Your fullName..."
                          className="bg-transparent px-2 py-1 border"
                          onChange={handleUserInput}
                          value={signupData.fullName}
                              />
                 </div>

                     
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input 
                          type="email" 
                          required
                          name="email"
                          id="email"
                          placeholder="Enter Your email..."
                          className="bg-transparent px-2 py-1 border"
                          onChange={handleUserInput}
                          value={signupData.email}
                              />
                 </div>

                 <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                    <input type="password" required name="password" id="password"  placeholder="Enter password.." className="bg-transparent px-2 py-1 border" onChange={handleUserInput} value={signupData.password} />
                 </div>

                 <button type="submit" className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg">
                        Create account
                    </button>

                    <p className="text-center">
                            Already have an account ? <Link to="/login" className="cusror-pointer text-accent">Login</Link>
                    </p>

                </form>

            </div>
        </HomeLayout>
    )

}

export default Signup;