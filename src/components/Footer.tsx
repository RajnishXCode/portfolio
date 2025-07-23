import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    return (
        <div className='bg-[#23272f] text-white flex flex-col items-center justify-center py-5 mt-10'>
            <div className='text-2xl font-bold'>Rajnish Tripathi</div>
            <div className='text-sm'>Designed and Developed by Rajnish Tripathi, all rights reserved</div>
            <div className='flex flex-row items-center justify-center gap-4 mt-4'>
                <div className='flex items-center justify-center bg-white rounded-full p-2'><MdEmail size={20} color='#23272f' /></div>
                <div className='flex items-center justify-center rounded-full'><FaGithub size={38} color='white' /></div>
                <div className='flex items-center justify-center bg-white rounded-full p-2'><FaLinkedinIn size={20} color='#23272f' /></div> 

            </div>

        </div>
    )
}

export default Footer