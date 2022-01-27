import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import './Detail.scss'

const Detail = (props) => {

    const piece = props.piece.artObject;

    return (
        <div className="detail">
            <motion.img
            initial={{width:"33.3vh",top:"33.3%",left:"33.3%",opacity:0,zIndex:-1}}
            animate={{zIndex:100,top:0,left:0,transition:{duration:2,delay:3},opacity:1,width:"50vw"}}
            exit={{opacity:0}}
            src={piece.webImage.url} alt="" className="detail__img"/>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,transition:{delay:5}}}
            exit={{opacity:0}}
            className="detail__container">
                <div className="detail__details">
                <h1>{piece.title}</h1>
                <h3>{piece.principalMaker}</h3>
                <h4>{piece.dating.presentingDate}</h4>
                </div>
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1, transition:{delay:6}}}
                className="detail__back">
                    <Link to={"/"}>⬅ Back to Gallery</Link>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Detail;
