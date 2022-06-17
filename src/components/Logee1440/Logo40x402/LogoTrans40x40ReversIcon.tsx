import { memo, SVGProps } from 'react';

const LogoTrans40x40ReversIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5.484 4.8H2.4v14.4h3.084V4.8ZM10.457 4.8H7.373v14.4h3.084V4.8Z' fill='#E8590C' />
    <path d='M7.397 19.2S7.637 4.8 21.6 4.8v3.092C10.41 7.892 10.48 19.2 10.48 19.2H7.397Z' fill='#E8590C' />
    <path d='M11.916 19.2s.096-9.593 9.684-9.593V12.7c-7.102 0-6.6 6.5-6.6 6.5h-3.084Z' fill='#E8590C' />
    <path
      d='M19.567 19.2a2.02 2.02 0 0 0 2.009-2.03c0-1.12-.9-2.03-2.009-2.03a2.02 2.02 0 0 0-2.008 2.03c0 1.121.9 2.03 2.008 2.03Z'
      fill='#E8590C'
    />
  </svg>
);

const Memo = memo(LogoTrans40x40ReversIcon);
export { Memo as LogoTrans40x40ReversIcon };
