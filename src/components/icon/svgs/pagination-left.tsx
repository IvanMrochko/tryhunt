import * as React from 'react';

const PaginationLeft = React.memo<any>(({ className, size, width = '15', height = '11', fill = '#6B6B6B' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.204275 5.99312L4.66803 10.4569C4.94037 10.7292 5.38206 10.7292 5.65441 10.4569C5.92681 10.1845 5.92681 9.7429 5.65441 9.47049L2.3813 6.19739L14.3025 6.19739C14.6877 6.19739 15 5.8851 15 5.49993C15 5.11482 14.6877 4.80247 14.3025 4.80247L2.3813 4.80247L5.6543 1.52936C5.9267 1.25696 5.9267 0.815385 5.6543 0.542985C5.51815 0.406896 5.3396 0.338712 5.16111 0.338712C4.98261 0.338712 4.80412 0.406896 4.66792 0.542984L0.204275 5.00674C-0.0681255 5.27914 -0.0681256 5.72072 0.204275 5.99312Z"
        fill={fill}
      />
    </svg>
  );
});

export { PaginationLeft };
