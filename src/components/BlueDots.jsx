import { motion } from 'framer-motion';
import Dots from '../assets/images/dotsblue.svg';
import PropTypes from 'prop-types';

export default function BlueDots({ controls, classes }) {
  const cssClass = `w-[200px] absolute ${classes}`;

  const imageAnimation = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.img
      src={Dots}
      alt="dots"
      className={cssClass}
      variants={imageAnimation}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    />
  );
}

BlueDots.propTypes = {
  controls: PropTypes.any,
  classes: PropTypes.string,
};

BlueDots.defaultProps = {
  classes: '',
};
