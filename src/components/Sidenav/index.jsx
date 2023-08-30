import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMenu, AiOutlineRadarChart, AiOutlineMail } from 'react-icons/ai';
import { GrUser, GrCatalog } from 'react-icons/gr';


export default function Sidenav() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 '>
                        <a href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-75'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#works" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-75'>
                            <AiOutlineRadarChart size={20} />
                            <span className='pl-4'>Trabalhos</span>
                        </a>
                        <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-75'>
                            <GrCatalog size={20} />
                            <span className='pl-4'>Projetos</span>
                        </a>
                        <a href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-75'>
                            <GrUser size={20} />
                            <span className='pl-4'>Sobre mim</span>
                        </a>
                        <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-75'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contato</span>
                        </a>
                    </div>
                ) : (
                    <div className='md:block hidden fixed top-[25%] z-10'>
                        <div className='flex flex-col'>
                            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineHome />
                            </a>
                            <a href="#works" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineRadarChart />
                            </a>
                            <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <GrCatalog />
                            </a>
                            <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <GrUser />
                            </a>
                            <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </a>

                        </div>
                    </div>
                )
            }
        </div>
    )
}
