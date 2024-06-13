import { useEffect, useState } from "react";
import logo from "../logo.svg";
import Login from "./Login";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()
       
        await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log(user);
            //   navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
  
    }



    return(
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex item-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nonwrap dark:text-white">Social Media</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/"><a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a></Link>
                            </li>
                            <li>
                                <Link to="/SignUp"><a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Sign Up</a></Link>
                            </li>
                            <li>
                                <Link to="/About"><a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="max-w-sm mx-auto h-screen flex flex-col justify-center">
                <span className="self-center text-2xl font-bold whitespace-nonwrap">Sign Up</span>
                <form>
                    <div className="mb-5">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email:</label>
                        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" required />
                    </div>
                    <div className="mb-5">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your password:</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <button type="submit" onClick={onSubmit} className="text-white bg-blue-700 hover:bg-blue800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-violet-700 dark:focus:ring-blue-800">Sign Up</button>
                </form>
            </div>
            <footer className="bg-white shadow dark:bg-gray-900">
                <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center">
                    <span className="bg-clip-text text-sm text-transparent sm:text-center bg-gradient-to-r from-rose-500 to-violet-400">Created by Muhammad Hazren bin Rosdi</span>
                    <span className="bg-clip-text text-sm text-transparent sm:text-center bg-gradient-to-r from-rose-500 to-violet-400">Project for fun!!</span>
                    <span className="bg-clip-text text-sm text-transparent sm:text-center bg-gradient-to-r from-rose-500 to-violet-400">© 2023 <a class="hover:underline">Social Media™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
}

export default SignUp;