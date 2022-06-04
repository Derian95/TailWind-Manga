import { useState, useEffect } from 'react'
import logo from './logo.svg'
import MangaGrid from './components/MangaGrid'
import {getHotManga} from './api/api'
function App() {
  const [mangas, setMangas] = useState([])

  const getMangas =async()=>{
    const data= await getHotManga()
    setMangas(data)
  }
  useEffect(() => {
    getMangas()
  }, []);

  return (
    <div className='max-w-4xl flex flex-col mx-auto p-1  bg-slate-900 '>
        <h1 className='text-4xl text-center text-slate-100'>Hot mangas
        </h1>
        <MangaGrid mangas={mangas} />
    </div>
  )
}

export default App
