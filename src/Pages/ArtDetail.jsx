import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Detail from '../components/artDetail/Detail';
export const ArtDetail = () => {

    const id = useParams().objectNumber;

    console.log("Hola");

    const [piece, setPiece] = useState([]);
    
    useEffect(() => {
        axios.get(`https://www.rijksmuseum.nl/api/nl/collection/${id}?key=yCF8BjBo`)
          .then(res => setPiece(res.data))
          console.log(piece);
          console.log("o");
          
      }, [])    

      if(piece.artObject){

      
    return (
        <div>
            <Detail piece={piece}/>
        </div>
    )
      }
      return(<></>)
}
