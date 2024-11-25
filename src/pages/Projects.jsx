import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and Tailwind CSS',
    link: 'https://github.com/ArjunAravindP/Portfolio',
    image:
      'https://img.freepik.com/free-vector/travel-landing-page-with-photo_23-2148382098.jpg?t=st=1731667840~exp=1731671440~hmac=bd686ea93bb4f64a31a265a3d43365d1cf2172a50f1a2b67b6cde7f69891ccfd&w=1800',
  },
  {
    title: 'Food Recipe Website',
    description:
      'Full-featured food recipe website, built with React, styled using Tailwind CSS, and powered by TheMealDB API for recipe search.',

    link: 'https://github.com/ArjunAravindP/Food-Recipe-Website',
    image:
      'https://img.freepik.com/free-vector/burger-template-design_23-2151261096.jpg?t=st=1731667932~exp=1731671532~hmac=8a4faa33a24015f6c46e2cb8c59c7f666a5586de48de3259c2674a35385efbb5&w=2000',
  },
  {
    title: 'E-Commerce Website',
    description:
      'This project is a full-featured e-commerce store for selling furniture, built with Node.js and React, and styled using Material UI.',
    link: 'https://github.com/ArjunAravindP/E-Commerce-Store',
    image:
      'https://img.freepik.com/free-vector/landing-page-happy-people-buying-clothes-online-t-shirt-percent-customer-flat-vector-illustration-e-commerce-digital-technology-concept_74855-8346.jpg?t=st=1731668014~exp=1731671614~hmac=5c41501b34626bc13df6d1e5c2be2271269caf990332538354022ec00de96ba9&w=2000',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'A simple tic-tac-toe game built with React and Tailwind CSS.',
    link: 'https://github.com/ArjunAravindP/Tic-Tac-Toe',
    image:
      'https://img.freepik.com/free-psd/3d-rendering-tic-tac-toe-board_23-2151686074.jpg?t=st=1731668066~exp=1731671666~hmac=d8a5bf2d93829a7c67ab994bbbcfbdb420e6c0b0a705b582e1374b156cc62884&w=1060',
  },
  {
    title: 'Other Projects',
    description: 'Explore more of my projects and contributions on GitHub.',
    link: 'https://github.com/ArjunAravindP',
    image:
      'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=1380&t=st=1709726669~exp=1709727269~hmac=40b4e0b7e7d0c5e8c2f7c8f6d7e8f9a0b1c2d3e4f5g6h7i8j9k0l1m2n3o4p5',
  },
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 px-4 md:px-8 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12"
        >
          <h1 className="font-bold text-[50px] md:text-[75px] text-mainColor">
            My Projects
          </h1>
          <Link
            to="/"
            className="px-6 py-3 bg-mainColor text-white rounded-lg hover:bg-mainColor/90 transition-colors duration-300"
          >
            Back Home
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-4 md:p-6 rounded-lg border-2 border-mainColor/20 hover:border-mainColor shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-mainColor mb-3">
                {project.title}
              </h3>
              <p className="text-tadBlue text-sm md:text-base">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
