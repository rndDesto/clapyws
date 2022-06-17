import { FC, memo } from 'react';

import { Placeholder } from '../Placeholder/Placeholder';
import classes from './_23MasterField.module.css';
import { _23MasterFieldIcon } from './_23MasterFieldIcon';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
  };
}
export const _23MasterField: FC<Props> = memo(function _23MasterField(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Placeholder />
      <_23MasterFieldIcon className={`${classes.icon} ${props.classes?.icon || ''}`} />
    </div>
  );
});
