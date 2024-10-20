import React from 'react'
import RoomCard from '../Room/RoomCard'

export default function Homepage() {
    return (
        <>
            <div className='my-16 text-center' >
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">Available Rooms</h1>
            </div>
            <div className='grid grid-cols-4 w-[80%] mx-auto gap-8' >
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
            </div>
        </>
    )
}
