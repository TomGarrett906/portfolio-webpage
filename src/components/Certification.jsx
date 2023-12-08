import React from 'react'

import HTML from '../assets/html-certified.png'
import CSS from '../assets/css-certified.png'
import Python from '../assets/python-certified.png'
import JavaScript from '../assets/javascript-certified.png'
import SQL from '../assets/sql-certified.png'
import Flask from '../assets/flask-certified.png'
import ReactImg from '../assets/react-certified.png'
import Node from '../assets/nodejs-certified.png'




const Certification = () => {
  return ( 
    <div name="certification" className='w-full h-screen bg-[#5778a5] text-[#0a192f]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffffff]'>Certification</p>
                <p className='py-4 text-[#f7c857] font-semibold'>These are the languages and technologies I am certified in :</p>
            </div>


        {/* ICON CONTAINER */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-lg shadow-[#000000] hover:text-[#f7c857] hover:shadow-[#f7c857] hover:scale-110 duration-500 rounded-full'>
                    <img className='w-20' src={HTML} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-lg shadow-[#000000] hover:text-[#f7c857] hover:shadow-[#f7c857] hover:scale-110 duration-500 rounded-full'>
                    <img className='w-20' src={CSS} alt="css icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-lg shadow-[#000000] hover:text-[#f7c857] hover:shadow-[#f7c857] hover:scale-110 duration-500 rounded-full'>
                    <img className='w-20' src={Python} alt="python icon" />
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-lg shadow-[#000000] hover:text-[#f7c857] hover:shadow-[#f7c857] hover:scale-110 duration-500 rounded-full'>
                    <img className='w-20' src={JavaScript} alt="javascript icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-lg shadow-[#000000] hover:text-[#f7c857] hover:shadow-[#f7c857] hover:scale-110 duration-500 rounded-full'>
                    <img className='w-20' src={SQL} alt="sql icon" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='shadow-lg shadow-[#000000] hover:text-[#f7c857] hover:shadow-[#f7c857] hover:scale-110 duration-500 rounded-full'>
                    <img className='w-20' src={Flask} alt="flask icon" />
                    <p className='my-4'>FLASK</p>
                </div>
                <div className='shadow-lg shadow-[#000000] hover:text-[#f7c857] hover:shadow-[#f7c857]  hover:scale-110 duration-500 rounded-full'>
                    <img className='w-20' src={Node} alt="node icon" />
                    <p className='my-4'>NODE . JS</p>
                </div>
                <div className='shadow-lg shadow-[#000000] hover:text-[#f7c857] hover:shadow-[#f7c857] hover:scale-110 duration-500 rounded-full'>
                    <img className='w-20' src={ReactImg} alt="react icon" />
                    <p className='my-4'>REACT</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Certification