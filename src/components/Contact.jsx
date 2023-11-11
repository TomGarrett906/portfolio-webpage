import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000] flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/e04d156c-bae5-49d4-b9f7-f9c288069192" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8 pt-20'>
            <p className='text-gray-300 text-4xl font-bold inline border-b-4 border-[#f7c857]'>Contact</p>
            <p className='py-4 text-gray-300'>Submit the form below or send me an email - tomgarrett906@gmail.com</p>

          </div>
          <input className='rounded-sm p-2 bg-gray-200 text-[#4d4d4d]' type="text" placeholder='Name' name='name' />
          <input className='rounded-sm my-4 p-2 bg-[#4d4d4d] text-gray-200' type="email" placeholder='Email' name='email' />
          <textarea className='rounded-sm bg-[#232323] text-gray-200 p-2' name="message" rows="10" placeholder='Message'></textarea>
          <button className='text-white border-2 hover:text-black hover:bg-[#f7c857] hover:border-[#f7c857] py-3 px-4 mt-5 mx-auto flex items-center rounded-sm duration-1000'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact