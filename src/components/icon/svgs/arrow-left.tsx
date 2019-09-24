import * as React from 'react';

const ArrowLeft = React.memo<any>(({ className, size, width = '9', height = '14', fill = 'white' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.36667 14L9 12.3667L3.63333 7L9 1.63333L7.36667 1.09646e-06L0.366666 7L7.36667 14Z" fill={fill} />
    </svg>
  );
});

export { ArrowLeft };
