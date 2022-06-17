import { memo, SVGProps } from 'react';

const Ellipse315Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} fill='#56C281' />
  </svg>
);

const Memo = memo(Ellipse315Icon);
export { Memo as Ellipse315Icon };
