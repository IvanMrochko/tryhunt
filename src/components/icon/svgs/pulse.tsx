import * as React from 'react';

const Pulse = React.memo<any>(({ className, size, width = '175', height = '36', fill = '#D4D4D7' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 175 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 24L74 24.2632L77.0869 16.2105L78 24.2632H81.5L83.326 16.2105L85.9999 1L88.6738 35L93.1303 10.8421L94.5 24.2632H175"
        stroke={fill}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export { Pulse };
