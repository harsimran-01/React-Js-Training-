import React from 'react'
import BgImage from '../assets/bg-slate.png'
import CoffeeMain from '../assets/black.png'
import Navbar from '../components/Navbar'
import { motion, scale } from "framer-motion"

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "100vw"
}

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className='min-h-[750px] w-full'>
        <div className="container">
          <Navbar />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[750px]'>
            {/* text content section */}
            <div className='text-light-orange mt-[100px] md:mt-0 p-4 space-y-28'>
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
                className='text-7xl font-bold leading-tight ml-14'>Black Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-2xl'>Black LifeStyle Lover</h1>
                  <p className='text-sm opacity-55 leading-loose'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nisi repudiandae, a omnis cum molestias magnam maxime,Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='absolute -top-6 -left-10 w-[260px] h-[190px] bg-gray-700/25'></div>
              </motion.div>
            </div>

          {/* </div> */}
          {/* image content section */}
          <div className='relative'>
            <motion.img 
            initial={{ opacity: 0, scale:0}}
                animate={{ opacity: 1, scale:1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.4,
                }}
            src={CoffeeMain} alt="" className='relative z-40 h-[400px] md:h-[700px] img-shadow' />
            {/* orange ring circle */}
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
            className='h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10'></motion.div>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                }}
            className='absolute -top-10 left-[300px] z-[1]'>
              <h1 className='text-[90px] scale-150 font-bold text-dark-gray/40 leading-none'>Black Tumbler</h1>
            </motion.div>
          </div>
          {/* third div section */}
          <motion.div
          initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }} 
          className='text-light-orange mt-[100px] md:mt-0 p-4 space-y-28'>
            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14'>Black Tumbler</h1>
            <div className='relative'>
              <div className='relative z-10 space-y-4'>
                <h1 className='text-2xl'>Black Tumbler</h1>
                <p className='text-sm opacity-55 leading-loose'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nisi repudiandae, a omnis cum molestias magnam</p>
              </div>
              <div className='absolute -top-6 -right-10 w-[260px] h-[190px] bg-dark-gray/60'></div>
            </div>
          </motion.div>
          <div></div>
        </div>
      </div>
    </section>
    </main >
  )
}


export default Hero
