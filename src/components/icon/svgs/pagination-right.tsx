import * as React from 'react';

const PaginationRight = React.memo<any>(({ className, size, width = '15', height = '11', fill = '#6B6B6B' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.7957 5.00688L10.332 0.543126C10.0596 0.270781 9.61794 0.270781 9.34559 0.543126C9.07319 0.815526 9.07319 1.2571 9.34559 1.5295L12.6187 4.80261H0.697462C0.312295 4.80261 0 5.1149 0 5.50007C0 5.88518 0.312295 6.19753 0.697462 6.19753H12.6187L9.34571 9.47064C9.07331 9.74304 9.07331 10.1846 9.34571 10.457C9.48185 10.5931 9.6604 10.6613 9.83889 10.6613C10.0174 10.6613 10.1959 10.5931 10.3321 10.457L14.7957 5.99326C15.0681 5.72086 15.0681 5.27928 14.7957 5.00688Z"
        fill={fill}
      />
    </svg>
  );
});

export { PaginationRight };
