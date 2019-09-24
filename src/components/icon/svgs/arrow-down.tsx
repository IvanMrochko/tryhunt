import * as React from 'react';

const ArrowDown = React.memo<any>(({ className, size, width = '14', height = '14', fill = '#262626' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0.933333L7.06667 -4.07973e-08L4 3.06667L0.933334 -3.08894e-07L9.12877e-07 0.933333L4 4.93333L8 0.933333Z"
        fill={fill}
      />
    </svg>
  );
});

export { ArrowDown };
