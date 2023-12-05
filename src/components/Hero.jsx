import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { logo, menu, close } from '../assets';
const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto flex items-center justify-center`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#915EFF]">Shruti</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Financial Expertise in the Making:
                        <br className="sm:block hidden" /> CFA Level II Candidate.
                    </p>
                </div>
            </div>

            {/* all block */}
            <div className="sm:hidden lg:hidden md:hidden xl:hidden w-3/6 absolute top-80">
                {/* show nothing */}
                {/* <img src={logo} alt="" className="w-full h-full object-cover" /> */}
            </div>

            {/* only sm block */}
            <div className="hidden sm:block md:hidden lg:hidden xl:hidden w-3/6 mt-20">
                <img src={logo} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="hidden sm:hidden lg:hidden md:block xl:hidden w-2/6 mt-20">
                <img src={logo} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="hidden sm:hidden lg:block md:hidden xl:hidden w-2/6 mt-20">
                <img src={logo} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="hidden xl:block w-2/6 absolute right-20">
                <img src={logo} alt="" className="w-full h-full object-cover" />
            </div>

            {/* <ComputersCanvas /> */}

            <div className="hidden sm:flex absolute xs:bottom-10 bottom-32 w-full justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
            <div className="sm:hidden lg:hidden md:hidden xl:hidden absolute bottom-2 flex w-full justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
