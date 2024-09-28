import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import KnowledgeBlock from './KnowledgeBlock';
import frontEndIcon from '../assets/images/Frontend.svg';
import backendIcon from '../assets/images/Backend.svg';
import techWriteIcon from '../assets/images/Writing.svg';

export default function FullStackTools() {
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
      { threshold: 0.1 } // Trigger when 50% of the section is visible
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
    <>
      <section className="min-h-screen bg-mainColor md:pt-0 snap-start flex flex-row items-center">
        <motion.div
          ref={sectionRef}
          className="w-full mx-10 text-center rounded-xl bg-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 py-7"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <KnowledgeBlock
            icon={frontEndIcon}
            title="Front End Development"
            description="I like to code things from scratch, and enjoy bringing ideas to life in the browser."
            base="Languages I speak:"
            baseContent="HTML, JavaScript, TypeScript, CSS, Sass, Git"
            tech="Tools & Frameworks"
            techContent={[
              'React JS',
              'Next JS',
              'Tailwind CSS',
              'Bootstrap',
              'Framer Motion',
              'Material UI',
              'Github',
            ]}
            className="border-b md:border-b-0 md:border-r border-gray-300"
          />
          <KnowledgeBlock
            icon={backendIcon}
            title="Back End Development"
            description="I enjoy building applications turning ideas into functional and efficient backend systems."
            base="Languages I speak:"
            baseContent="JavaScript, Python, Git"
            tech="Tools & Frameworks"
            techContent={[
              'Node.js',
              'Express.js',
              'MongoDB',
              'PostgreSQL',
              'MySQL',
              'RESTful API',
              'GraphQL',
            ]}
            className="border-b md:border-b-0 md:border-r border-gray-300"
          />
          <KnowledgeBlock
            icon={techWriteIcon}
            title="Technical Writing"
            description="I enjoy creating clear, concise documentation and simplifying complex ideas."
            base="Writing Styles:"
            baseContent="Concise, Instructional, Persuasive"
            tech="Tools & Technologies"
            techContent={[
              'Snagit',
              'Davinci Resolve',
              'ScreenFlow',
              'XML',
              'Markdown',
              'WordPress',
              'Photoshop',
            ]}
            className="border-gray-300"
          />
        </motion.div>
      </section>
    </>
  );
}
