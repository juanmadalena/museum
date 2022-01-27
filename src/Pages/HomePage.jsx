import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Gallery } from '../components/Gallery/Gallery'
import { Home } from '../components/Home/Home'

export const HomePage = () => {
    const [art, setart] = useState([]);


    useEffect(() => {
      axios.get('https://www.rijksmuseum.nl/api/nl/collection?key=yCF8BjBo&involvedMaker=Rembrandt+van+Rijn&imgonly&toppieces&ps=5')
        .then(res => setart(res.data))
    }, [])

    console.log(art);
    
    return (
        <>
        <Home />
        <Gallery art={art}/>
        </>
    )
}
