import React from 'react'
import Manga from './Manga'

export default function MangaGrid({mangas}) {
    return (
    <div className='
        grid
        md:grid-cols-2
        xl_grid-cols-3
        gap-4
        p-4
    '>
        {mangas.map((manga, index)=>{
            return <Manga key={index} manga={manga}/>
        })}
    </div>
  )
}
