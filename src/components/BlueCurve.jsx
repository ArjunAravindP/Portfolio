import { motion } from 'framer-motion';
import CurveBlue from '../assets/images/curveBlue.svg';
import PropTypes from 'prop-types';

export default function BlueCurve({ controls, classes, isRotate }) {
  const cssClass = `w-[35%] absolute ${classes}`;
  const rotate = isRotate ? 180 : 0;
  const curveBlueAnimation = {
    hidden: { rotate: rotate, opacity: 0, scale: 1.2 },
    visible: { rotate: rotate, opacity: 1, scale: 1 },
  };
  return (
    <motion.img
      src={CurveBlue}
      alt="curves"
      className={cssClass}
      variants={curveBlueAnimation}
      initial="hidden"
      animate={controls}
      style={{ objectFit: 'cover' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    />
  );
}

BlueCurve.propTypes = {
  controls: PropTypes.any,
  classes: PropTypes.string,
  isRotate: PropTypes.bool,
};
