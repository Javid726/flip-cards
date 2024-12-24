import styles from './Card.module.css';
import { motion } from 'motion/react';
import { useState } from 'react';
// import helloMoon from '../../assets/images/Hello Moon.png';

const Card = ({ index, back }: { index: number; back: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(prev => !prev);
  };

  return (
    <motion.div
      className={styles.container}
      onClick={handleClick}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div className={styles.front}>Card {index}</motion.div>
      <motion.div className={styles.back}>
        <img className={styles.back_image} src={back} alt="illustration" />
      </motion.div>
    </motion.div>
  );
};

export default Card;
