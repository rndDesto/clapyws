import { memo, SVGProps } from 'react';

const Chevron_rightIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 31 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='m20.109 11.105-6.274-5.054c-.612-.494-1.604-.494-2.217 0-.613.493-.613 1.293 0 1.786l5.164 4.161-5.164 4.16c-.613.494-.613 1.293 0 1.787.305.246.707.37 1.109.37.4 0 .803-.124 1.108-.37l6.274-5.055c.614-.492.614-1.29 0-1.785Z'
      fill='#2B2826'
    />
  </svg>
);

const Memo = memo(Chevron_rightIcon3);
export { Memo as Chevron_rightIcon3 };
