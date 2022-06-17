import { FC, memo } from 'react';

import classes from './AttributTab3.module.css';

interface Props {
  className?: string;
  classes?: {
    label?: string;
  };
}
export const AttributTab3: FC<Props> = memo(function AttributTab3(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.label} ${props.classes?.label || ''}`}>Harian</div>
    </div>
  );
});
