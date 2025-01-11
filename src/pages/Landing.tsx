import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="pl-[30px] pt-[110px]">
      <h2 className="text-5xl">
        Flip cards, flip the world around you. <br />
        Find matches, find the wastelands of your memory.
      </h2>
      <Button className="text-2xl mt-24 px-12 py-8" asChild>
        <Link to="/game" className="inline-block">
          Start the Game
        </Link>
      </Button>
    </div>
  );
};

export default Landing;
