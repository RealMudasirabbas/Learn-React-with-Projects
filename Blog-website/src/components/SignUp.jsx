import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import { Button, Input, Logo } from './index';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const signup = async (data) => {
        setError('');
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const session = await authService.getCurrentUser();
                if (session) {
                    dispatch(login(session));
                    navigate('/');
                }
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="w-full flex justify-center items-center">
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
            >
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Create a new Account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && (
                    <p className="text-red-600 mt-8 text-center">{error}</p>
                )}
                <form onSubmit={handleSubmit(signup)} className="mt-8">
                    <div className="space-y-5">
                        <Input
                            label=" Full Name"
                            placeholder="Enter your Name"
                            {...register('name'), {
                                required: true,
                            }}
                        />
                        <Input 
                            label="Email"
                            placeholder="Enter your Email"
                            type="email"
                            {...register('email'), { required: true }}
                            />
                            <Input 
                            label="Password"
                            placeholder="Enter your Password" 
                            type="password" 
                            {...register('password'), { required: true }}/>

                        <Button
                            type="submit"
                            className='w-full'>
                                Sign Up
                            </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;