import { FC, memo } from 'react';

import { Base } from '../Base/Base';
import classes from './Button.module.css';

interface Props {
  className?: string;
}
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <button className={`${classes.root} ${props.className || ''}`}>
      <Base />
    </button>
  );
});
