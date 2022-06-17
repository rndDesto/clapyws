import { memo, SVGProps } from 'react';

const InformationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 1.207A6.794 6.794 0 1 0 14.794 8 6.801 6.801 0 0 0 8 1.207Zm0 11.889a5.096 5.096 0 1 1 .001-10.192 5.096 5.096 0 0 1 0 10.192Zm0-8.492a.849.849 0 1 0 .001 1.698.849.849 0 0 0 0-1.698ZM8.09 8h-.18a.76.76 0 0 0-.759.759v1.878a.76.76 0 0 0 .76.76h.179a.76.76 0 0 0 .76-.76V8.76A.76.76 0 0 0 8.09 8Z'
      fill='#424242'
    />
  </svg>
);

const Memo = memo(InformationIcon);
export { Memo as InformationIcon };
