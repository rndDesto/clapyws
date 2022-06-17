import { FC, memo } from 'react';

import { _21MasterButton } from '../_21MasterButton/_21MasterButton';
import classes from './Base.module.css';

interface Props {
  className?: string;
}
export const Base: FC<Props> = memo(function Base(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <_21MasterButton />
    </div>
  );
});
