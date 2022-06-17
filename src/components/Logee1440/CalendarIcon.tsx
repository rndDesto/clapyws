import { memo, SVGProps } from 'react';

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.642 3.083h-2.547a1.274 1.274 0 1 0-2.548 0H9.452a1.274 1.274 0 1 0-2.547 0H4.357A2.548 2.548 0 0 0 1.81 5.631v14.012a2.547 2.547 0 0 0 2.547 2.547h15.285a2.546 2.546 0 0 0 2.548-2.547V5.63a2.547 2.547 0 0 0-2.548-2.548Zm0 16.56H4.357v-8.916h15.285v8.916Zm0-11.465H4.357V5.631h2.548a1.274 1.274 0 1 0 2.547 0h5.095a1.274 1.274 0 1 0 2.548 0h2.547v2.547Z'
      fill='#2B2826'
    />
  </svg>
);

const Memo = memo(CalendarIcon);
export { Memo as CalendarIcon };
