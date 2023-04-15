import React from 'react'
import { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

export default function
    () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoader, setShowLoader] = useState(false)

    return (
        <div className=' flex items-center justify-center'>
            <section className='  w-64  md:w-[30%] flex flex-col gap-2'>
                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Email :</label>
                <input name='email'
                    type='email'
                    className=' m-1 border h-10 p-3 rounded-md pl-4 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter your email '
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Password :</label>
                <input name='password'
                    type='password'
                    className=' m-1 border p-3 h-10  rounded-md  pl-4 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
                <button
                    type='submit'
                    className='  text-white border p-3 mt-6  rounded-md pl-6 h-12  bg-black'>
                    {showLoader ? <PulseLoader size={8} color="#ffffff" /> : "Login"}
                </button>
            </section>

        </div>
    )
}
