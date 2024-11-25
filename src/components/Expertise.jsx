import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Button from './Button';
import BlueCurve from './BlueCurve';
import BlueDots from './BlueDots';
import { useNavigate } from 'react-router-dom';

export default function Expertise() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const section = sectionRef.current;

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible'); // Start animation when in view
            // Trigger rotation animation for CurveBlue
            controls.set('rotate', 180); // Set to initial rotation
            controls.start('curveBlueVisible'); // Start specific animation for CurveBlue
          } else {
            controls.start('hidden'); // Reset animation when out of view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [controls]);

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const hanldeSeeWorkClick = () => {
    // window.open('https://github.com/ArjunAravindP', '_blank');
    navigate('/projects');
  };
  const hanldeReadArticle = () => {
    window.open('https://www.webtoffee.com/author/arjun/', '_blank');
  };

  return (
    <>
      <section
        ref={sectionRef}
        className=" md:h-screen md:max-h[950px] h-[1000px] bg-slate-50 snap-start grid md:grid-cols-2 grid-cols-1 relative"
      >
        {/* Left Section */}
        <motion.div
          className="md:pl-[10%] pr-10 pl-10 max-w-[650px] flex flex-col justify-center "
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
        >
          <h1 className="text-mainColor text-[40px] md:text-[50px]  font-bold leading-none">
            Full Stack Developer
          </h1>
          <p className="mt-8 text-tadBlue">
            With expertise across the entire development lifecycle, I build
            full-stack applications that provide seamless user experiences from
            frontend to backend. My proficiency in the MERN stack allows me to
            create performant and scalable web applications.
          </p>

          <Button handleClick={hanldeSeeWorkClick}>SEE MY WORK</Button>
        </motion.div>

        <div className="hidden md:block">
          <BlueCurve controls={controls} classes="right-0" isRotate={true} />
          <BlueDots controls={controls} classes="left-1/2 top-20" />
        </div>

        <div className="hidden md:block">
          <BlueCurve controls={controls} classes="left-0 bottom-0" />
          <BlueDots controls={controls} classes="right-1/2 bottom-20" />
        </div>

        {/* Right Text Section */}
        <motion.div
          className="md:pl-[10%] pr-10 pl-10 max-w-[650px] flex flex-col justify-center"
          variants={fadeInUp}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
        >
          <h1 className="text-mainColor text-[40px] md:text-[50px] font-bold leading-none">
            Technical Content Writer
          </h1>
          <p className="mt-8 text-tadBlue">
            With expertise across the entire documentation lifecycle, I craft
            clear and comprehensive content for WordPress plugins and Shopify
            applications, focusing on e-commerce solutions. My proficiency in
            technical writing enables me to simplify complex concepts and
            enhance user understanding, ensuring that users can effectively
            leverage these tools to optimize their online businesses.
          </p>
          <Button handleClick={hanldeReadArticle}>READ MY ARTICLES</Button>
        </motion.div>
      </section>
    </>
  );
}
