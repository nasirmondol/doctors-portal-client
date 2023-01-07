import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    if (gUser || user) {
        console.log(user, gUser)
    }
    let signInError;

    if(error || gError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if(loading || gLoading){
        return <Loading/>
    }

    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Eamil</span>
                            </label>
                            <input 
                            type="email" 
                            placeholder="Your Email" 
                            class="input input-bordered w-full max-w-xs" 
                            {...register("email", {
                                required:{
                                    value: true,
                                    message: 'email is required'
                                },

                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a valid Email'
                                }
                              })}
                            />
                            <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input 
                            type="password" 
                            placeholder="Password" 
                            class="input input-bordered w-full max-w-xs" 
                            {...register("password", {
                                required:{
                                    value: true,
                                    message: 'password is required'
                                },

                                minLength: {
                                    value: 6,
                                    message: 'Password should be at least 6 character length'
                                }
                              })}
                            />
                            <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p>{signInError}</p>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="LOGIN" />
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="text-secondary btn btn-outline uppercase">Continue with google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;