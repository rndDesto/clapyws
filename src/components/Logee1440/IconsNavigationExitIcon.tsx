import { memo, SVGProps } from 'react';

const IconsNavigationExitIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5 19h7v2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h7v2H5v14Z' fill='#000' />
    <path d='m17.17 13-2.58 2.59L16 17l5-5-5-5-1.41 1.41L17.17 11H7.5v2h9.67Z' fill='#000' />
  </svg>
);

const Memo = memo(IconsNavigationExitIcon);
export { Memo as IconsNavigationExitIcon };
