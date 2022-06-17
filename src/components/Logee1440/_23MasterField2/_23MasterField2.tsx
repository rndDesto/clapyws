import { FC, memo } from 'react';

import { Placeholder2 } from '../Placeholder2/Placeholder2';
import classes from './_23MasterField2.module.css';
import { _23MasterFieldIcon } from './_23MasterFieldIcon';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
  };
}
export const _23MasterField2: FC<Props> = memo(function _23MasterField2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Placeholder2 />
      <_23MasterFieldIcon className={`${classes.icon} ${props.classes?.icon || ''}`} />
    </div>
  );
});
