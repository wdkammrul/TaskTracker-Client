import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthenticationPage/AuthProvider/AuthProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashBoard = () => {

    const { user } = useContext(AuthContext)
    // const userEmail = user?.email

    // const [allProfile, setAllProfile] = useState([])
    // useEffect(() => {
    //     fetch('https://diagno-easy-server.vercel.app/users')
    //         .then(res => res.json())
    //         .then(data => setAllProfile(data))
    // }, [])

    // const loggedInUser = allProfile?.filter(profile => profile.email === userEmail)
    // const isAdmin = loggedInUser[0]?.isAdmin

    return (
      <div className="">
            <div className="flex mt-10 gap-6">
                <div className="w-52 min-h-svh bg-indigo-500 rounded-lg">
                    <ul className="menu space-y-3">
                        <NavLink to='/' className='bg-blue-600-600 btn btn-secondary text-white'>Go Home</NavLink>



                        {user ?

                            <>
                                <h1 className="text-3xl font-extrabold p-2">Dashboard</h1>
                                <li>
                                    <NavLink to="/dashBoard/profile">Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashBoard/tasks">Tasks</NavLink>
                                </li>

                            </>

                            :

                            <>

                            </>
                        }
                    </ul>
                </div>
                <div className="flex-1 rounded-lg">
                    <ToastContainer />
                    <Outlet></Outlet>
                </div>
            </div>
      </div>
    );
};

export default DashBoard;