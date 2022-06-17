import { FC, memo } from 'react';

import { BaseOutlineField2 } from '../BaseOutlineField2/BaseOutlineField2';
import { Label2 } from '../Label2/Label2';
import classes from './FieldOutline2.module.css';

interface Props {
  className?: string;
}
export const FieldOutline2: FC<Props> = memo(function FieldOutline2(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Label2 />
      <BaseOutlineField2 />
    </div>
  );
});
