import { memo, SVGProps } from 'react';

const Chevron_downIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M17.946 8.632a1.275 1.275 0 0 0-1.785 0l-4.162 4.094-4.16-4.094a1.277 1.277 0 0 0-1.787 0 1.232 1.232 0 0 0 0 1.758l5.055 4.974a1.277 1.277 0 0 0 1.787 0l5.053-4.974a1.229 1.229 0 0 0-.001-1.758Z'
      fill='#2B2826'
    />
  </svg>
);

const Memo = memo(Chevron_downIcon2);
export { Memo as Chevron_downIcon2 };
