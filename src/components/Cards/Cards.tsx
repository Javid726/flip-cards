import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';
import { CARDS } from '@/constants/constants';

interface Card {
  id: string;
  type: string;
  front: string;
  back: string;
}

const Cards = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);

  const handleCardClick = (cardId: string, cardType: string) => {
    if (matchedPairs.includes(cardType)) return;

    setFlippedCards(prev => {
      if (prev.length === 2) return [cardId];

      if (prev.includes(cardId)) return prev;

      return [...prev, cardId];
    });
  };

  useEffect(() => {
    const shuffleCards = () => {
      const doubledCards = [...CARDS, ...CARDS].map((card, index) => ({
        ...card,
        id: `${card.type}-${index}`,
      }));

      // shuffling
      return doubledCards
        .map(card => ({ card, sort: Math.random }))
        .sort((a: any, b: any) => a.sort - b.sort)
        .map(({ card }) => card);
    };

    setCards(shuffleCards());
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;

      if (first === second) {
        setMatchedPairs(prev => [...prev, first]);

        // setTimeout(() => {
        //   setFlippedCards([]);
        // }, 1000);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 500);
      }
    }
  }, [flippedCards]);

  return (
    <div className={styles.card_container}>
      {cards.map((card, index) => {
        return (
          <Card
            key={`${card.type}-${index}`}
            card={card}
            isFlipped={
              flippedCards.includes(card.id) || matchedPairs.includes(card.id)
            }
            onCardClick={cardType => handleCardClick(card.id, cardType)}
          />
        );
      })}
    </div>
  );
};

export default Cards;
