// KnowledgeBlock.js
import PropTypes from "prop-types"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function KnowledgeBlock({ title, description, base, baseContent, icon, tech, techContent = [], className }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false) // Reset to hidden when not in view
        }
      })
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div ref={ref} className={`text-center flex flex-col items-center p-6 ${className}`} initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={variants} transition={{ duration: 0.5 }}>
      {icon && <img className="w-16 h-16 mb-3" src={icon} alt={`${title} icon`} />}
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="px-12 my-6 font-light">{description}</p>
      <h3 className="font-semibold text-mainColor text-l my-3">{base}</h3>
      <p className="mb-6 font-light">{baseContent}</p>
      <h3 className="font-semibold text-mainColor text-l my-3">{tech}</h3>
      <ul>
        {techContent.map((element, index) => (
          <li className="my-3 font-light" key={index}>
            {element}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// PropTypes for better validation
KnowledgeBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  base: PropTypes.string.isRequired,
  baseContent: PropTypes.string.isRequired,
  icon: PropTypes.string,
  tech: PropTypes.string.isRequired,
  techContent: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string
}
