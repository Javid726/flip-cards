import Card from '../Card/Card';
import styles from './Cards.module.css';
import { CARDS, CARD_DECK } from '@/constants/constants';
import { getRandomInt } from '@/lib/utils';

const Cards = () => {
  let max = CARD_DECK / 2;
  let card_arr = [...CARDS];

  return (
    <div className={styles.card_container}>
      {Array.from({ length: CARD_DECK }).map((_, index) => {
        const r = getRandomInt(max);
        const card = card_arr[r];
        card_arr.splice(r, 1);
        max--;

        if (max === 0) {
          card_arr = [...CARDS];
          max = CARD_DECK / 2;
        }
        return <Card key={index} index={index + 1} back={card?.back} />;
      })}
    </div>
  );
};

export default Cards;
