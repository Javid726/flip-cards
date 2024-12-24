import styles from './Card.module.css';
import { motion } from 'motion/react';
// import { useState } from 'react';
import pricklyPear from '../../assets/prickly-pear.svg';
// import helloMoon from '../../assets/images/Hello Moon.png';

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

const Card = ({ card, onCardClick, isFlipped = false }: CardProps) => {
  // const [isFlipped, setIsFlipped] = useState(false);
  // const [currentCardType, setCurrentCardType] = useState('');

  const handleClick = () => {
    onCardClick(card.type);
    // const cardType = e.currentTarget.dataset.cardType;
    // setIsFlipped(prev => !prev);
    // if (cardType) setCurrentCardType(cardType);
    // console.log(currentCardType);
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
