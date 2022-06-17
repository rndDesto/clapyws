import { FC, memo } from 'react';

import classes from './Logo40x40.module.css';
import { LogoTrans40x40ReversIcon } from './LogoTrans40x40ReversIcon';

interface Props {
  className?: string;
  classes?: {
    logoTrans40x40Revers?: string;
  };
}
export const Logo40x40: FC<Props> = memo(function Logo40x40(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <LogoTrans40x40ReversIcon
        className={`${classes.logoTrans40x40Revers} ${props.classes?.logoTrans40x40Revers || ''}`}
      />
    </div>
  );
});
