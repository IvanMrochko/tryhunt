import * as React from 'react';

const Logout = React.memo<any>(({ className, size, width = '18', height = '16', fill = '#6B6B6B' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M14.8694 8.35432C14.8727 8.35105 14.8727 8.35105 14.876 8.34779C14.8859 8.33472 14.8958 8.32493 14.9024 8.31186C14.9057 8.3086 14.9057 8.30533 14.909 8.30206C14.9156 8.289 14.9255 8.27594 14.9321 8.26287C14.9321 8.25961 14.9354 8.25634 14.9354 8.25634C14.942 8.24328 14.9486 8.23021 14.9552 8.21388C14.9552 8.21062 14.9552 8.21062 14.9585 8.20735C14.9651 8.19429 14.9684 8.17796 14.975 8.16163C14.975 8.15836 14.975 8.1551 14.9783 8.1551C14.9816 8.13877 14.9882 8.1257 14.9882 8.10937C14.9882 8.10284 14.9882 8.09957 14.9915 8.09304C14.9948 8.07998 14.9948 8.06692 14.9981 8.05385C15.0014 8.03426 15.0014 8.01793 15.0014 7.99833C15.0014 7.97873 15.0014 7.9624 14.9981 7.94281C14.9981 7.92974 14.9948 7.91668 14.9915 7.90362C14.9915 7.89708 14.9915 7.89382 14.9882 7.88729C14.9849 7.87096 14.9816 7.85789 14.9783 7.84156C14.9783 7.8383 14.9783 7.83503 14.975 7.83503C14.9717 7.8187 14.9651 7.80564 14.9585 7.78931C14.9585 7.78604 14.9585 7.78604 14.9552 7.78278C14.9486 7.76971 14.942 7.75338 14.9354 7.74032C14.9354 7.73705 14.9321 7.73379 14.9321 7.73379C14.9255 7.72072 14.9189 7.70766 14.909 7.69459C14.9057 7.69133 14.9057 7.68806 14.9024 7.6848C14.8925 7.67173 14.8859 7.65867 14.876 7.64887C14.8727 7.6456 14.8727 7.6456 14.8694 7.64234C14.8562 7.62927 14.8463 7.61294 14.8298 7.59988L11.5672 4.3731C11.3462 4.15428 10.9866 4.15428 10.7656 4.3731C10.5446 4.59192 10.5446 4.94791 10.7656 5.16673L13.0616 7.43985H3.93362C3.62022 7.43985 3.36621 7.69133 3.36621 7.99833C3.36621 8.3086 3.62022 8.56008 3.93362 8.56008H13.0649L10.7854 10.8169C10.5644 11.0357 10.5644 11.3917 10.7854 11.6105C10.8943 11.7183 11.0394 11.7738 11.1846 11.7738C11.3297 11.7738 11.4749 11.7183 11.5837 11.6105L14.8265 8.40004C14.843 8.38045 14.8562 8.36738 14.8694 8.35432Z"
          fill={fill}
        />
        <path
          d="M3.07125 1.12023H7.29382C7.60721 1.12023 7.86123 0.868749 7.86123 0.561747C7.86123 0.25148 7.60721 0 7.29382 0H3.07125C1.37893 0 0 1.36518 0 3.04062V12.9594C0 14.6348 1.37893 16 3.07125 16H7.22454C7.53794 16 7.79195 15.7485 7.79195 15.4415C7.79195 15.1313 7.53794 14.8798 7.22454 14.8798H3.07125C2.00242 14.8798 1.13152 14.0176 1.13152 12.9594V3.04062C1.13481 1.97918 2.00242 1.12023 3.07125 1.12023Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width={w} height={h} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

export { Logout };