import React from 'react'

export default function index({name,founder,link}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='w-96 flex flex-col rounded-lg border-4 border-black p-2 hover:bg-[#000b5e] hover:text-white'>
        <span className='text-lg font-bold'>{name}</span>
        <span className='italic opacity-80'>{founder}</span>
    </a>
  )
}
