import { FC, memo } from 'react';

import { _23MasterField } from '../_23MasterField/_23MasterField';
import classes from './BaseOutlineField.module.css';

interface Props {
  className?: string;
}
export const BaseOutlineField: FC<Props> = memo(function BaseOutlineField(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <_23MasterField />
    </div>
  );
});
