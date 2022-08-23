import { ReactNode } from 'react';

type TModalProps = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

export default TModalProps;
