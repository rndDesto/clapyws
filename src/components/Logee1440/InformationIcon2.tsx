import { memo, SVGProps } from 'react';

const InformationIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 1.207A6.794 6.794 0 1 0 14.793 8 6.802 6.802 0 0 0 8 1.207Zm0 11.889A5.096 5.096 0 1 1 8 2.904a5.096 5.096 0 0 1 0 10.192Zm0-8.492a.849.849 0 1 0 0 1.698.849.849 0 0 0 0-1.698ZM8.09 8h-.18a.76.76 0 0 0-.76.759v1.878a.76.76 0 0 0 .76.76h.18a.76.76 0 0 0 .76-.76V8.76A.76.76 0 0 0 8.09 8Z'
      fill='#424242'
    />
  </svg>
);

const Memo = memo(InformationIcon2);
export { Memo as InformationIcon2 };
