import React from 'react'
import Profile from './Profile'
import Widget from './Widgets'

export default function () {
    return (
        <div className=' md:flex items-center justify-center  gap-2 p-2'>
            <div className=' m-2 md:w-[50%] bg-themeBgLight '>
                <Profile />
            </div>
            <Widget />
        </div>
    )
}
