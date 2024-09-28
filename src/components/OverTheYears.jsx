import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import Experinace from "../assets/images/experiance.svg"

export default function OverTheYears() {
  const controls = useAnimation() // Hook for controlling animation
  const sectionRef = useRef(null) // Ref for the section

  useEffect(() => {
    const section = sectionRef.current

    // Intersection Observer
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            controls.start("visible") // Start animation when in view
          } else {
            controls.start("hidden") // Reset animation when out of view
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    )

    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [controls])

  // Animation Variants
  const textAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <>
      <section ref={sectionRef} className="h-screen mt-4 max-h-[900px] bg-mainColor md:pt-0 snap-start flex flex-row items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full">
          {/* Left Text Section with Animation */}
          <div className="md:pl-36 pl-10 pr-10 pt-24 md:pt-0 flex flex-col gap-5 max-w-full items-center">
            <motion.h1 className="text-[50px] text-slate-300 leading-none font-bold self-start" variants={textAnimation} initial="hidden" animate={controls} transition={{ duration: 0.8, ease: "easeInOut" }}>
              Over the <br /> Years,
            </motion.h1>
            <motion.p className="text-slate-200" variants={textAnimation} initial="hidden" animate={controls} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}>
              Following my graduation, I transitioned into technical content writing, taking on a role at Mozilor Technologies in early 2023. As a technical writer, I worked closely with developers to create user guides, how-to articles, and detailed API documentation. This experience not only taught me the value of clear communication but also exposed me to the inner workings of web applications.
            </motion.p>
            <motion.p className="text-slate-200" variants={textAnimation} initial="hidden" animate={controls} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}>
              Now, I’m focused on creating fast, accessible, and user-friendly web experiences using React, Node.js, and MongoDB. I’m actively looking for opportunities to further develop my skills and contribute to impactful projects.
            </motion.p>
          </div>
          {/* Right Image Section with Animation */}
          <div className="flex flex-row justify-center items-center">
            <motion.img className="w-2/3 md:w-5/6 opacity-85" src={Experinace} alt="Experience" variants={imageAnimation} initial="hidden" animate={controls} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }} />
          </div>
        </div>
      </section>
    </>
  )
}
