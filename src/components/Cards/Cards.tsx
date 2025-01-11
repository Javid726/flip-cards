import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';
import { CARDS } from '@/constants/constants';
import WinningMessageDialog from '../WinningMessageDialog';

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
  const [endGame, setEndGame] = useState(false);

  function shuffleCards() {
    const doubledCards = [...CARDS, ...CARDS].map((card, index) => ({
      ...card,
      id: `${card.type}-${index}`,
    }));

    // shuffling
    return doubledCards
      .map(card => ({ card, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map(({ card }) => card);
  }

  function resetState() {
    setFlippedCards([]);
    setMatchedPairs([]);

    setTimeout(() => {
      setCards(shuffleCards());
    }, 500);
  }

  const handleCardClick = (cardId: string, cardType: string) => {
    if (matchedPairs.includes(cardType)) return;

    setFlippedCards(prev => {
      if (prev.length === 2) return [cardId];

      if (prev.includes(cardId)) return prev;

      return [...prev, cardId];
    });
  };

  const handleNewGame = () => {
    resetState();
  };

  useEffect(() => {
    setCards(shuffleCards());
  }, []);

  useEffect(() => {
    if (matchedPairs.length === 6) {
      setEndGame(true);
    }

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const f = first.split('-')[0];
      const s = second.split('-')[0];

      if (f === s) {
        setMatchedPairs(prev => [...prev, f]);
      }

      const timerId = setTimeout(() => {
        setFlippedCards([]);
      }, 500);

      return () => {
        if (timerId) {
          clearTimeout(timerId);
        }
      };
    }
  }, [flippedCards]);

  return (
    <section className="h-full flex justify-center items-center">
      <div className={styles.card_container}>
        {cards.map((card, index) => {
          return (
            <Card
              key={`${card.type}-${index}`}
              card={card}
              isFlipped={
                flippedCards.includes(card.id) ||
                matchedPairs.includes(card.type)
              }
              onCardClick={cardType => handleCardClick(card.id, cardType)}
            />
          );
        })}
        <WinningMessageDialog
          open={endGame}
          onOpenChange={setEndGame}
          onConfirm={handleNewGame}
        />
      </div>
    </section>
  );
};

export default Cards;
