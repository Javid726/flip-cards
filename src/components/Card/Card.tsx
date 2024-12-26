import styles from './Card.module.css';
import { motion } from 'motion/react';
import pricklyPear from '../../assets/prickly-pear.svg';

interface CardProps {
  card: {
    id: string;
    back: string;
    front: string;
    type: string;
  };
  onCardClick: (cardType: string) => void;
  isFlipped: boolean;
}

const Card = ({ card, onCardClick, isFlipped }: CardProps) => {
  const handleClick = () => {
    onCardClick(card.type);
  };

  return (
    <motion.div
      className={styles.container}
      onClick={handleClick}
      data-card-type={card.type}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div className={styles.front}>
        <img src={pricklyPear} width={50} alt="Prickly" />
      </motion.div>
      <motion.div className={styles.back}>
        <img
          className={styles.back_image}
          src={card.back}
          alt={`Card ${card.type}`}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
