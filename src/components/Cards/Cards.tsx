import Card from '../Card/Card';
import styles from './Cards.module.css';

const CARD_DECK = 12;

const Cards = () => {
  return (
    <div className={styles.card_container}>
      {Array.from({ length: CARD_DECK }).map((_, index) => (
        <Card key={index} index={index + 1} />
      ))}
    </div>
  );
};

export default Cards;
