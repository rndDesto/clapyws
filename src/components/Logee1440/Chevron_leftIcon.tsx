import { memo, SVGProps } from 'react';

const Chevron_leftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 31 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='m14.216 12 5.163-4.16c.613-.494.613-1.293 0-1.787a1.776 1.776 0 0 0-1.108-.37c-.402 0-.804.124-1.109.37l-6.274 5.055c-.613.493-.613 1.293 0 1.786l6.274 5.054c.612.494 1.604.494 2.217 0 .613-.493.613-1.293 0-1.786L14.216 12Z'
      fill='#2B2826'
    />
  </svg>
);

const Memo = memo(Chevron_leftIcon);
export { Memo as Chevron_leftIcon };
