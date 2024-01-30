import React from 'react'

const VideoTitle = ({ title, overview, release_date }) => {
    return (
        <div className='w-screen aspect-video  pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black  '>
            <h1 className='text-6xl font-bold '>{title}</h1>
            <h4 className='py-6 text-lg'>In Cinemas at {release_date}</h4>
            <p className='py-3 text-lg w-1/2'>{overview}</p>
            <div >
                <button className='bg-white hover:opacity-50  text-black rounded-lg p-4 px-12 text-xl mx-3 '>▶️ Play</button>
                <button className='bg-gray-600 hover:opacity-50  text-white rounded-lg p-4 px-12 text-xl '>!More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
