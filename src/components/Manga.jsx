import React from 'react'

export default function Manga({ manga }) {

  const { attributes } = manga
  const titles = attributes.titles['en'] || attributes.titles['ja_jp']
  const img = attributes.coverImage?.tiny
  return (
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-cyan-100 '>
        <img src={img} alt={titles} className=' w-full ' />
        <div className='px-6 py-4'>
            <h3 className='font-bold text-xl mb-2'>{titles}</h3>
            <p className='text-gray-700 text-base line-clamp-3 hover:line-clamp-none hover:cursor-pointer h-auto'>{attributes.description}</p>
        </div>
      </div>
      

  )
}
