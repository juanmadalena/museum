import React from 'react'
import './Home.scss'
import {motion} from 'framer-motion'

export const Home = () => {

    return (
        <>
        <section className="c-home">
            <motion.section 
            className="c-home__logo">
                <motion.img
                initial={{opacity:0}}
                animate={{opacity:0.5, transition:{delay:0.8, duration:0.8}}}
                exit={{opacity:0, transition:{delay:1}}}
                className="c-home__img" src="https://res.cloudinary.com/dffkajufp/image/upload/v1628439616/rijksmuseum-logo_xwesab.png" alt=""/>
            </motion.section>
        </section>
        </>
    )
}
