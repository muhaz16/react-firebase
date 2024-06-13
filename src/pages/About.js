import logo from "../logo.svg";
import { Link } from "react-router-dom";

function About() {
    return(
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Social Media</span>
                    </a>
                    <div className="hidden w-full md:flex md:items-center md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/">
                                    <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/SignUp">
                                    <a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/About">
                                    <a className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">About</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="max-w-sm mx-auto h-screen flex flex-col justify-center">
                <span className="self-center text-2xl font-bold whitespace-nonwrap">About</span>
                <span className="self-center text-m font-bold whitespace-nonwrap">Welcome to SocialMedia, a social media designed to help users build and maintain friendship.</span>
                <span className="self-center text-m font-bold whitespace-nonwrap">The Primary Goal of SocialMedia is to have fun. I developed this project to learn more about reactJS and Firebase.</span>
            </div>
            <footer className="bg-white shadow dark:bg-gray-900 ">
            <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center">
                    <span className="bg-clip-text text-sm text-transparent sm:text-center bg-gradient-to-r from-rose-500 to-violet-400">Created by Muhammad Hazren bin Rosdi</span>
                    <span className="bg-clip-text text-sm text-transparent sm:text-center bg-gradient-to-r from-rose-500 to-violet-400">Project for fun!!</span>
                    <span className="bg-clip-text text-sm text-transparent sm:text-center bg-gradient-to-r from-rose-500 to-violet-400">© 2023 <a class="hover:underline">Social Media™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
}

export default About;