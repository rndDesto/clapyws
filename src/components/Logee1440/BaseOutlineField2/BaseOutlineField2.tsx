import { FC, memo } from 'react';

import { _23MasterField2 } from '../_23MasterField2/_23MasterField2';
import classes from './BaseOutlineField2.module.css';

interface Props {
  className?: string;
}
export const BaseOutlineField2: FC<Props> = memo(function BaseOutlineField2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <_23MasterField2 />
    </div>
  );
});
