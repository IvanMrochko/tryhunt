import * as React from 'react';

const Email = React.memo<any>(({ className, size, width = '30', height = '30', fill = '#008654' }) => {
  const w = size || width;
  const h = size || height;
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path
          d="M29.7044 0.0768879C29.5217 -0.027409 29.2969 -0.0256512 29.1159 0.0814582L18.3783 6.43091C18.0998 6.59562 18.0075 6.95492 18.1722 7.23347C18.3368 7.51197 18.6961 7.60425 18.9747 7.4396L26.6788 2.884L12.3288 17.7734L5.19161 15.5899L14.506 10.0821C14.7845 9.9173 14.8768 9.558 14.7121 9.27945C14.5475 9.00095 14.1881 8.90855 13.9095 9.07331L3.45179 15.2572C3.25198 15.3754 3.14071 15.6004 3.16819 15.8309C3.19568 16.0615 3.35663 16.254 3.57859 16.3219L12.1022 18.9296L15.8625 25.7741C15.8665 25.7812 15.8705 25.7872 15.8747 25.7925C15.9374 25.8972 16.0315 25.9827 16.1488 26.032C16.2222 26.0629 16.2994 26.0779 16.376 26.0779C16.5262 26.0779 16.674 26.0202 16.7856 25.911L21.1095 21.6852L29.2427 24.1735C29.2989 24.1906 29.3566 24.1991 29.414 24.1991C29.538 24.1991 29.6605 24.1597 29.7626 24.0842C29.9119 23.9737 30 23.7989 30 23.6132V0.585833C30 0.375423 29.8872 0.181126 29.7044 0.0768879ZM15.8945 19.2907C15.8266 19.3887 15.7902 19.5051 15.7902 19.6244V23.2086L13.2225 18.5349L24.585 6.74521L15.8945 19.2907ZM16.9621 24.1V20.4164L19.8326 21.2946L16.9621 24.1ZM28.8282 22.8212L17.3145 19.2987L28.8282 2.67786V22.8212Z"
          fill={fill}
        />
        <path
          d="M9.6342 20.3658C9.40533 20.137 9.03444 20.137 8.80551 20.3658L3.33567 25.8357C3.10686 26.0645 3.10686 26.4355 3.33567 26.6644C3.45016 26.7787 3.6001 26.8359 3.75004 26.8359C3.89999 26.8359 4.04993 26.7787 4.16436 26.6643L9.6342 21.1945C9.86301 20.9657 9.86301 20.5947 9.6342 20.3658Z"
          fill={fill}
        />
        <path
          d="M2.3479 27.652C2.11903 27.4233 1.74813 27.4233 1.51926 27.652L0.171606 28.9997C-0.0572021 29.2285 -0.0572021 29.5995 0.171606 29.8284C0.28604 29.9428 0.435981 29.9999 0.585923 29.9999C0.735864 29.9999 0.885806 29.9427 1.00024 29.8283L2.3479 28.4807C2.5767 28.2519 2.5767 27.8808 2.3479 27.652Z"
          fill={fill}
        />
        <path
          d="M8.35854 28.9653C8.24961 28.8563 8.09844 28.7936 7.94434 28.7936C7.78959 28.7936 7.63906 28.8563 7.53008 28.9653C7.42109 29.0742 7.3584 29.2248 7.3584 29.3795C7.3584 29.5336 7.42103 29.6848 7.53008 29.7938C7.63906 29.9028 7.79023 29.9655 7.94434 29.9655C8.09844 29.9655 8.24961 29.9028 8.35854 29.7938C8.46752 29.6848 8.53027 29.5336 8.53027 29.3795C8.53027 29.2248 8.46758 29.0742 8.35854 28.9653Z"
          fill={fill}
        />
        <path
          d="M12.7178 24.6054C12.4891 24.3766 12.1182 24.3766 11.8891 24.6054L8.99192 27.5026C8.76311 27.7314 8.76311 28.1024 8.99192 28.3312C9.10635 28.4457 9.25629 28.5029 9.40624 28.5029C9.55618 28.5029 9.70612 28.4456 9.82055 28.3312L12.7178 25.4341C12.9466 25.2053 12.9466 24.8343 12.7178 24.6054Z"
          fill={fill}
        />
        <path
          d="M22.7168 24.3832C22.488 24.1545 22.1171 24.1545 21.8882 24.3832L18.9831 27.2883C18.7543 27.5171 18.7543 27.8881 18.9831 28.117C19.0976 28.2314 19.2475 28.2886 19.3974 28.2886C19.5474 28.2886 19.6973 28.2314 19.8118 28.117L22.7168 25.2119C22.9456 24.9831 22.9456 24.6121 22.7168 24.3832Z"
          fill={fill}
        />
        <path
          d="M16.6115 7.98686C16.5025 7.87788 16.3514 7.81519 16.1973 7.81519C16.0432 7.81519 15.892 7.87788 15.783 7.98686C15.6741 8.09585 15.6113 8.24702 15.6113 8.40171C15.6113 8.55581 15.674 8.7064 15.783 8.81538C15.892 8.92495 16.0432 8.98706 16.1973 8.98706C16.3514 8.98706 16.5025 8.92495 16.6115 8.81538C16.7204 8.7064 16.7832 8.55581 16.7832 8.40171C16.7832 8.24702 16.7205 8.09585 16.6115 7.98686Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

export { Email };
