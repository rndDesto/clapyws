import { FC, memo } from 'react';

import classes from './AccordionSimple.module.css';

interface Props {
  className?: string;
  classes?: {
    line?: string;
  };
}
export const AccordionSimple: FC<Props> = memo(function AccordionSimple(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.line} ${props.classes?.line || ''}`}></div>
    </div>
  );
});
