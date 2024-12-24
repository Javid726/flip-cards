import dance from '../assets/images/dance dance.png';
import helloMoon from '../assets/images/Hello Moon.png';
import pickPick from '../assets/images/pickpick.png';
import ramen from '../assets/images/ramen amen.png';
import boysober from '../assets/images/boy&girl.png';
import flower from '../assets/images/flower flows.png';

const CARDS = [
  { front: '', back: dance },
  { front: '', back: helloMoon },
  { front: '', back: pickPick },
  { front: '', back: ramen },
  { front: '', back: boysober },
  { front: '', back: flower },
];
const CARD_DECK = 12;

Object.freeze(CARDS);

export { CARDS, CARD_DECK };
