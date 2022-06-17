import { FC, memo } from 'react';

import classes from './Header.module.css';
import { Profile_circleIcon } from './Profile_circleIcon';

interface Props {
  className?: string;
  classes?: {
    logeePort?: string;
    role?: string;
    profile_circle?: string;
    pTPPJKONLINE?: string;
  };
}
export const Header: FC<Props> = memo(function Header(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.logeePort} ${props.classes?.logeePort || ''}`}>Logee Port</div>
      <div className={`${classes.role} ${props.classes?.role || ''}`}>
        <Profile_circleIcon className={`${classes.profile_circle} ${props.classes?.profile_circle || ''}`} />
        <div className={`${classes.pTPPJKONLINE} ${props.classes?.pTPPJKONLINE || ''}`}>PT. PPJK ONLINE</div>
      </div>
    </div>
  );
});
