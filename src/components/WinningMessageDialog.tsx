import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';

type WinningMessageDialogProps = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onConfirm: () => void;
};

const WinningMessageDialog = ({
  open,
  onOpenChange,
  onConfirm,
}: WinningMessageDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-64 text-2xl">
        <DialogHeader className="mb-8">
          <DialogTitle className="text-3xl">You Won!</DialogTitle>
          <DialogDescription>What else you need on earth???</DialogDescription>
        </DialogHeader>
        <p className="text-base">Maybe another hardcore session?</p>
        <Button
          className="text-base w-48 h-12"
          onClick={() => {
            onConfirm();
            onOpenChange(false);
          }}
        >
          Let's start new one
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default WinningMessageDialog;
