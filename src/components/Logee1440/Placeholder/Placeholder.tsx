import { FC, memo } from 'react';

import classes from './Placeholder.module.css';

interface Props {
  className?: string;
  classes?: {
    placeholder?: string;
  };
}
export const Placeholder: FC<Props> = memo(function Placeholder(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.placeholder} ${props.classes?.placeholder || ''}`}>05/04/2022</div>
    </div>
  );
});
