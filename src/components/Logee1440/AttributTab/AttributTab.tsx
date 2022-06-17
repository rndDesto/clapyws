import { FC, memo } from 'react';

import classes from './AttributTab.module.css';

interface Props {
  className?: string;
  classes?: {
    frame2915?: string;
    label?: string;
    indicator?: string;
  };
}
export const AttributTab: FC<Props> = memo(function AttributTab(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.frame2915} ${props.classes?.frame2915 || ''}`}>
        <div className={`${classes.label} ${props.classes?.label || ''}`}>Tahunan</div>
      </div>
      <div className={`${classes.indicator} ${props.classes?.indicator || ''}`}></div>
    </div>
  );
});
