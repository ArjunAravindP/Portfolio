import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Input from './Input';
import Button from './Button';
import CurveBlue from '../assets/images/curveBlue.svg';

export default function Contact() {
  const controls = useAnimation(); // Create animation controls
  const sectionRef = useRef(null); // Reference for the main div

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Hidden state
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  useEffect(() => {
    const section = sectionRef.current;

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible'); // Start animation when in view
          } else {
            controls.start('hidden'); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (section) {
      observer.observe(section); // Observe the section
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Cleanup observer
      }
    };
  }, [controls]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-slate-100 md:pt-0 snap-start flex flex-row items-center justify-center relative z-0"
    >
      <motion.div
        className="w-[700px] flex flex-col gap-36 z-10"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration
      >
        <div>
          <h2 className="font-bold text-[50px] text-center text-mainColor">
            Send me a message!
          </h2>
          <p className="text-center text-xl">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-10 px-5" action="">
            <div className="flex flex-col md:flex-row gap-10">
              <Input name="Name" type="text" placeholder="Enter your name" />
              <Input
                name="Email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <Input name="Message" type="text" placeholder="Enter a message" />
            </div>
            <Button classes="self-center">SHOOT</Button>
          </form>
        </div>
      </motion.div>
      <img
        src={CurveBlue}
        alt="curves"
        className="absolute bottom-0 left-0 w-[450px] -z-10 opacity-30"
      />
      <img
        src={CurveBlue}
        alt="curves"
        className="absolute rotate-180 top-0 right-0 w-[450px] -z-10 opacity-30"
      />
    </section>
  );
}
