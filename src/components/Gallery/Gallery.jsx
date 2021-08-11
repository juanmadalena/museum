import React, { useRef, useEffect } from 'react'
import './Gallery.scss'
import {motion} from 'framer-motion'

export const Gallery = (props) => {
    const pieces = (props.art.artObjects);


    if( props.art.artObjects ){
        
        return (
            <div className="gallery">
                {pieces.map((item,index)=>
                <div key={index} className={`gallery__div gallery__div${index}`}>
                    {/* <h1 className={`item`}>{item.title}</h1> */}
                    <motion.img 
                    data-scroll
                    initial={{opacity:0}}
                    animate={{opacity:1, transition:{delay:2,duration:2}}}
                    className="hello"src={item.webImage.url}/>
                </div>)}

            </div>
        )

    }

    return(
        <h1> </h1>
    )
}
