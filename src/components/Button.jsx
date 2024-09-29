import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function Button({ classes, children, handleClick }) {
  const cssClass = `border-[1px] font-bold text-sm border-mainColor w-[60%] py-4 mt-5 text-mainColor ${classes}`;

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cssClass}
    >
      {children} <span>&#8594;</span>
    </motion.button>
  );
}

Button.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.any,
};
