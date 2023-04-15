import React from 'react'
import { useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import banker from '../assets/banker.png'
import { motion } from 'framer-motion';

export default function
    () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showLoader, setShowLoader] = useState(false)

    return (
        <div className=' md:grid md:grid-cols-2 items-center justify-center h-screen w-full  '>
            <motion.article className=' flex items-center justify-center '
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 3 } }}
            >
                <img className=' w-60 h-60  md:p-10 md:w-[70%] md:h-[70%] object-contain' src={banker} />
            </motion.article>

            <section className='  w-64  md:w-[500px] flex flex-col gap-2  justify-center  m-auto md:p-10'>
                <h1 className=' font-bold text-3xl pl-4'>Create an account</h1>
                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Name :</label>
                <input name='text'
                    type='text'
                    className=' m-1  h-10 p-3   bg-themeBgLight   rounded-md pl-4 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter your email '
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold' >Email :</label>
                <input name='email'
                    type='email'
                    className=' m-1  h-10 p-3   bg-themeBgLight   rounded-md pl-4 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter your email '
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label className='text-gray-500 pt-1 pl-4 font-semibold'>Password :</label>
                <input name='password'
                    type='password'
                    className=' m-1  h-10 p-3   bg-themeBgLight   rounded-md pl-4 transition-all duration-300 outline-none focus:outline-theme-primary-light focus:border-none'
                    placeholder='Enter password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                />
                <button
                    type='submit'
                    className='  text-white  p-3 mt-6  rounded-md pl-6 h-12  bg-themeBlue hover:bg-[#4361ee] duration-300'>
                    {showLoader ? <PulseLoader size={8} color="#ffffff" /> : "Register"}
                </button>

            </section>

        </div>
    )
}
