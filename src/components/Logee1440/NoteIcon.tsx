import { memo, SVGProps } from 'react';

const NoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.095 1.207H2.905a1.698 1.698 0 0 0-1.698 1.698v10.19a1.698 1.698 0 0 0 1.698 1.698H8A6.8 6.8 0 0 0 14.794 8V2.905a1.699 1.699 0 0 0-1.699-1.698ZM9.7 12.799V9.7h3.1a5.1 5.1 0 0 1-3.1 3.1ZM13.095 8H8v5.095H2.905V2.905h10.19V8ZM6.302 4.603a.851.851 0 0 0 .85.85h1.697a.849.849 0 1 0 0-1.699H7.151a.852.852 0 0 0-.85.85Z'
      fill='#2B2826'
    />
  </svg>
);

const Memo = memo(NoteIcon);
export { Memo as NoteIcon };
