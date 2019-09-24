import * as React from 'react';

const Add = React.memo<any>(({ className, size, width = '14', height = '14', fill = '#7B7B7B' }) => {
    const w = size || width;
    const h = size || height;
    return (
        <svg className={className} width={w} height={h} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3623 4.86228H6.13772V0.637871C6.13772 0.286087 5.85223 0 5.5 0C5.14777 0 4.86228 0.286087 4.86228 0.63772V4.86228H0.63772C0.285636 4.86228 0 5.14837 0 5.5C0 5.85284 0.285636 6.13772 0.63772 6.13772H4.86228V10.3621C4.86228 10.7153 5.14777 10.9998 5.5 10.9998C5.85223 10.9998 6.13772 10.7148 6.13772 10.3621V6.13772H10.3623C10.7147 6.13772 11 5.85269 11 5.5C11 5.14837 10.7145 4.86228 10.3623 4.86228Z" fill={fill} />
        </svg>
    );
});

export { Add };
