import * as React from 'react';

const Upload = React.memo<any>(({ className, size, width = '20', height = '20', fill = 'white' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.42684 2.68913L6.7613 5.35466C6.54059 5.57538 6.17556 5.57538 5.95485 5.35466C5.72989 5.12971 5.72989 4.76892 5.95485 4.54397L9.59662 0.902201C9.70273 0.791845 9.84704 0.732422 9.99984 0.732422C10.1484 0.732422 10.297 0.796089 10.4031 0.902201L14.0448 4.54397C14.2698 4.76892 14.2698 5.12971 14.0448 5.35466C13.9345 5.46926 13.7902 5.52444 13.6416 5.52444C13.4973 5.52444 13.3487 5.46502 13.2384 5.35466L10.5728 2.68913V14.3148C10.5728 14.6331 10.3182 14.8878 9.99984 14.8878C9.68151 14.8878 9.42684 14.6331 9.42684 14.3148V2.68913ZM18.854 10.342C18.854 10.0236 19.1087 9.76897 19.427 9.76897C19.7453 9.76897 20 10.0279 20 10.342V15.5542C20 17.6 18.3362 19.2681 16.2861 19.2681H3.71392C1.66808 19.2681 0 17.6043 0 15.5542V10.2571C0 9.93875 0.254669 9.68408 0.573005 9.68408C0.891341 9.68408 1.14601 9.93875 1.14601 10.2571V15.5542C1.14601 16.9676 2.29626 18.1221 3.71392 18.1221H16.2861C17.6995 18.1221 18.854 16.9719 18.854 15.5542V10.342Z"
        fill={fill}
      />
    </svg>
  );
});

export { Upload };
