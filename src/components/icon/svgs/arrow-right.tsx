import * as React from 'react';

const ArrowRight = React.memo<any>(({ className, size, width = '9', height = '14', fill = 'white' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.63333 -2.85581e-07L2.85581e-07 1.63333L5.36667 7L2.16226e-06 12.3667L1.63334 14L8.63333 7L1.63333 -2.85581e-07Z"
        fill={fill}
      />
    </svg>
  );
});

export { ArrowRight };
