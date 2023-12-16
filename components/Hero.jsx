'use client';

import Image from "next/image";
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-[850px]" id="home">
        <div className="container mx-auto h-full flex justify-center items-center xl:justify-start">
            {/*text*/}
            <div>Text</div>
            {/*image*/}
            <div>
                <Image 
                    src='/assets/hero/singer_2.png' 
                    alt="singer" 
                    width={617} 
                    height={893} 
                />
            </div>
        </div>
    </section>
  )
}

export default Hero