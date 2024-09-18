import Navbar from './Navbar'
import NewsArea from './NewsArea'
import { useState } from 'react'

const News = () => {
    const [category,setCategory] = useState('general')
  return (
    <>
        <Navbar setCategory={setCategory} />
        <NewsArea category={category} />        
    </>
  )
}

export default News