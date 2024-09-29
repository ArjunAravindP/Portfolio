import Hero from '../assets/images/Hero.png';
import Dots from '../assets/images/dots.svg';
import Curve from '../assets/images/curves.svg';
import { motion } from 'framer-motion';
export default function HeroSection() {
  return (
    <>
      <motion.section
        className="md:h-screen min-h-screen bg-slate-50 snap-start grid grid-cols-1 md:grid-cols-3 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-full md:col-span-2 bg-mainColor relative z-0">
          <motion.div
            className="h-full md:pl-24 pl-10 pb-5 pt-48 z-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <h2 className="text-2xl text-white">Hi, I&lsquo;m</h2>
            <h1 className="font-bold leading-none text-white text-[75px]">
              Arjun <br />
              Aravind
            </h1>
            <h2 className="text-2xl text-white">a Full-Stack Developer</h2>
            <p className="w-3/4 pt-8 pr-12 text-white">
              I specialize in developing dynamic web applications using the MERN
              stack, and I’m passionate about delivering seamless, efficient,
              and innovative digital experiences
            </p>
          </motion.div>

          <motion.img
            src={Curve}
            alt="Curve"
            className="absolute h-[100%] w-[100%] left-0 bottom-0 -z-10 opacity-60"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="h-screen md:h-full md:col-span-1 bg-subColor relative flex flex-col justify-center items-center md:justify-start md:items-start">
          <motion.div
            className="w-[300px] h-[300px] bg-white absolute
            md:top-1/3 md:left-0 md:-translate-x-1/2 md:-translate-y-1/3 bg-cover bg-center z-10 "
            style={{ backgroundImage: `url(${Hero})` }}
          ></motion.div>
          <motion.div className="w-[300px] h-[300px] bg-transparent absolute border-2 border-white translate-x-12 translate-y-12 md:top-1/3 md:left-0 md:-translate-x-24 md:-translate-y-14"></motion.div>

          <motion.img
            src={Dots}
            alt="Dots"
            className="absolute top-[30%]  md:top-[10%] md:-left-48 w-[150px] h-[150px] left-7"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.img
            src={Dots}
            alt="Dots"
            className="absolute bottom-[10%] left-[5%] md:bottom-36 md:left-20 w-[150px] h-[150px] "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />

          <motion.img
            src={Dots}
            alt="Dots"
            className="absolute right-[5%] top-[10%] md:right-24 md:top-24 w-[150px] h-[150px] "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.section>
    </>
  );
}
