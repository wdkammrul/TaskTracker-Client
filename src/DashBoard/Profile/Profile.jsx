import React, { useContext } from 'react';
import { AuthContext } from '../../AuthenticationPage/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    console.log(user)

    return (
        <div className="items-center justify-center flex mx-auto flex-col">
            <img className="md:w-96" src={user?.photoURL} alt="Profile" />
            <h1 className="mt-6 text-3xl md:text-5xl font-extrabold">{user?.displayName
}</h1>
        </div>
    );
};

export default Profile;
