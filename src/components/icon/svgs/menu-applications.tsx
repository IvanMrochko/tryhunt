import * as React from 'react';

const MenuApplications = React.memo<any>(({ className, size, width = '23', height = '21', fill = '#008654' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.3377 0H3.66227C1.64686 0 0 1.66584 0 3.70449V13.5202C0 15.5589 1.64686 17.2247 3.66227 17.2247H4.32941L3.74625 20.1789C3.69493 20.4337 3.79757 20.7027 4.00284 20.8631C4.11947 20.9528 4.2641 21 4.40872 21C4.51602 21 4.62799 20.9717 4.7213 20.9198L11.668 17.2247H19.3377C21.3531 17.2247 22.9953 15.5589 23 13.5202V3.70449C23 1.66584 21.3531 0 19.3377 0ZM5.81765 16.6773C5.85963 16.4744 5.80832 16.2667 5.67769 16.1063C5.54706 15.9458 5.35578 15.8562 5.15517 15.8562H3.66227C2.38864 15.8562 1.35294 14.8085 1.35294 13.5202V3.70449C1.35294 2.41618 2.38864 1.36854 3.66227 1.36854H19.3377C20.6114 1.36854 21.6471 2.41618 21.6471 3.70449V13.5202C21.6471 14.8085 20.6114 15.8562 19.3377 15.8562H11.5C11.3927 15.8562 11.2807 15.8845 11.1828 15.9364L5.34645 19.0416L5.81765 16.6773Z"
        fill={fill}
      />
    </svg>
  );
});

export { MenuApplications };