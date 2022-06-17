import { memo, SVGProps } from 'react';

const Npct1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#prefix__a)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='m6.205 3.32 2.873 1.914 8.68-3.447L14.887 0l-8.68 3.32Zm-2.744 7.085 8.553-3.383-2.936-1.788L.333 8.617v4.788l3.128 1.915v-4.915Zm11.808 3.383L6.525 17.17v4.915l-3.064-1.98V15.32l8.872-3.383 2.936 1.852Zm-3.064-4.98v3.128l8.873-3.32V3.703L17.822 1.85V6.7l-5.617 2.107Zm3.256 9.894v-3.127l5.617-2.107v-4.85l3.255 1.85v4.915l-8.872 3.32 2.808 1.914L9.59 24l-3-1.915 8.872-3.383Z'
        fill='#FFAB00'
      />
    </g>
    <defs>
      <clipPath id='prefix__a'>
        <path fill='#fff' transform='translate(.667)' d='M0 0h24v24H0z' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(Npct1Icon);
export { Memo as Npct1Icon };
