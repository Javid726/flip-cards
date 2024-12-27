import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="heading">
      <h2 className="heads">Flip cards, flip the world around you.</h2>
      <p>Find matches, find the wastelands of your memory</p>
      <Button className="text-md mt-[2.5rem]" asChild>
        <Link to="/game" className="px-[4.8rem] py-[3.2rem]">
          Start the Game
        </Link>
      </Button>
    </div>
  );
};

export default Landing;
