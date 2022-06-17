import { memo, SVGProps } from 'react';

const Profile_circleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 1.81a10.186 10.186 0 0 0-5.369 18.844c.007.004.011.01.017.014l.01.005.01.007a10.166 10.166 0 0 0 10.684-.012A10.188 10.188 0 0 0 12 1.81Zm0 17.833a7.507 7.507 0 0 1-4-1.134 6.367 6.367 0 0 1 8 0 7.508 7.508 0 0 1-4 1.133ZM9.453 12a2.548 2.548 0 1 1 5.095 0 2.548 2.548 0 0 1-5.095 0Zm8.446 4.834a2.537 2.537 0 0 0-.305-.313 8.944 8.944 0 0 0-1.84-1.106 5.096 5.096 0 1 0-7.508 0 8.941 8.941 0 0 0-1.84 1.106c-.11.095-.213.2-.305.313a7.643 7.643 0 1 1 11.798 0Z'
      fill='#2B2826'
    />
  </svg>
);

const Memo = memo(Profile_circleIcon);
export { Memo as Profile_circleIcon };
