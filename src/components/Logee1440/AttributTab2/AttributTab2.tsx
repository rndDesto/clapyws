import { FC, memo } from 'react';

import classes from './AttributTab2.module.css';

interface Props {
  className?: string;
  classes?: {
    label?: string;
  };
}
export const AttributTab2: FC<Props> = memo(function AttributTab2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.label} ${props.classes?.label || ''}`}>Mingguan</div>
    </div>
  );
});
