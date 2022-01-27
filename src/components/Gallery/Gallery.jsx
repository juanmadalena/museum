import React from 'react'
import './Gallery.scss'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

export const Gallery = (props) => {
    const pieces = (props.art.artObjects);

    if( props.art.artObjects ){
        
        return (
            
            <div className="gallery">
                {pieces.map((item,index)=>
                <motion.div key={index} className={`gallery__div gallery__div${index}`} exit={{top:"30%",left:"30%", transition:{duration:2}}}>
                    <Link  to={`${item.objectNumber}`} className="gallery__link">
                    <motion.img 
                    initial={{opacity:0}}
                    animate={{opacity:1, transition:{delay:1.5,duration:2}}}
                    exit={{opacity:0, transition:{delay:1,duration:4}}}
                    className="hello"src={item.webImage.url}/>
                    </Link> 
                </motion.div>)}
            </div>
        )

    }

    return(
        <></>
    )
}
