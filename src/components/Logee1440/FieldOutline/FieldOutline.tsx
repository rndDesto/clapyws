import { FC, memo } from 'react';

import { BaseOutlineField } from '../BaseOutlineField/BaseOutlineField';
import { Label } from '../Label/Label';
import classes from './FieldOutline.module.css';

interface Props {
  className?: string;
}
export const FieldOutline: FC<Props> = memo(function FieldOutline(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <Label />
      <BaseOutlineField />
    </div>
  );
});
