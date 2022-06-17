import { memo, SVGProps } from 'react';

const IconsNavigationDashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12.595 5H19v4.454h-6.405V5ZM5 13.373h6.405V5H5v8.372ZM12.595 10.63H19V19h-6.405v-8.37ZM5 14.546h6.405V19H5v-4.454Z'
      fill='#000'
    />
  </svg>
);

const Memo = memo(IconsNavigationDashboardIcon);
export { Memo as IconsNavigationDashboardIcon };
