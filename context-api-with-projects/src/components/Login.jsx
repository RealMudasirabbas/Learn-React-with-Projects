import React, { useState, useContext } from 'react';
import UserContext from '../context/UseContext';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <input
                type="text"
                placeholder="Username"
                className="border border-gray-400 rounded-md py-2 px-4 mb-4"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="border border-gray-400 rounded-md py-2 px-4 mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                Submit
            </button>
        </div>
    );
}

export default Login;
