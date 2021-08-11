import React from 'react'
import './Home.scss'
import {motion} from 'framer-motion'

export const Home = () => {
    return (
        <section className="c-home">
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1, transitionDelay:1}}
            className='c-home__scroll'
            >Scroll to see the gallery</motion.p>
            <motion.section 
            initial={{width:"0px"}}
            animate={{width:"96vw", transition:{duration:2}}}
            className="c-home__logo">
                <motion.img
                initial={{opacity:0}}
                animate={{opacity:1, transition:{delay:2.5, duration:1}}}
                className="c-home__img" src="https://res.cloudinary.com/dffkajufp/image/upload/v1628439616/rijksmuseum-logo_xwesab.png" alt=""/>
            </motion.section>
        </section>
    )
}
