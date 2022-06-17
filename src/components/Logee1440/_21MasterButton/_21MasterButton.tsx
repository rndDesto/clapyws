import { FC, memo } from 'react';

import classes from './_21MasterButton.module.css';
import { _21MasterButtonIcon } from './_21MasterButtonIcon';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
  };
}
export const _21MasterButton: FC<Props> = memo(function _21MasterButton(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <_21MasterButtonIcon className={`${classes.icon} ${props.classes?.icon || ''}`} />
    </div>
  );
});
