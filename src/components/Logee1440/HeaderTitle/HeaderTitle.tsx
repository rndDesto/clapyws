import { FC, memo } from 'react';

import classes from './HeaderTitle.module.css';

interface Props {
  className?: string;
  classes?: {
    bg?: string;
    line?: string;
    detailPemesanan?: string;
  };
}
export const HeaderTitle: FC<Props> = memo(function HeaderTitle(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.bg} ${props.classes?.bg || ''}`}></div>
      <div className={`${classes.line} ${props.classes?.line || ''}`}></div>
      <div className={`${classes.detailPemesanan} ${props.classes?.detailPemesanan || ''}`}>Dashboard</div>
    </div>
  );
});
