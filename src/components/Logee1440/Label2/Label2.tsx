import { FC, memo } from 'react';

import classes from './Label2.module.css';

interface Props {
  className?: string;
  classes?: {
    label?: string;
    label2?: string;
  };
}
export const Label2: FC<Props> = memo(function Label2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.label} ${props.classes?.label || ''}`}>
        <div className={`${classes.label2} ${props.classes?.label2 || ''}`}>Sampai</div>
      </div>
    </div>
  );
});
