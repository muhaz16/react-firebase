import logo from '../logo.svg';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

function Home() {

    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();

    const SignOut = (e) => {
        e.preventDefault();
        signOut(auth)
        .then(() => {
            // Sign out succesful
            navigate("/");
        }).catch((error) => {
            // An error happened
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return(
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex item-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nonwrap dark:text-white"> Social Media</span>
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <div className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                            <button onClick={SignOut} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Sign Out</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="max-w-sm mx-auto h-screen flex flex-col justify-center">
                <a className="self-center text-2xl font-bold whitespace-nonwrap">Welcome to Social Media</a>
            </div>
        </div>
    );
}

export default Home;