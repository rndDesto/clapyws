import { FC, memo } from 'react';

import classes from './Placeholder2.module.css';

interface Props {
  className?: string;
  classes?: {
    placeholder?: string;
  };
}
export const Placeholder2: FC<Props> = memo(function Placeholder2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.placeholder} ${props.classes?.placeholder || ''}`}>05/04/2022</div>
    </div>
  );
});
