import { memo, SVGProps } from 'react';

const Ellipse314Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} fill='#FAB005' />
  </svg>
);

const Memo = memo(Ellipse314Icon);
export { Memo as Ellipse314Icon };
