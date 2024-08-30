import React, { FC } from 'react';
import { PiCheckCircleFill, PiWarningFill, PiXCircleFill, PiInfoFill } from 'react-icons/pi';

interface BannerProps {
  children?: React.ReactNode;
  variant: 'success' | 'warning' | 'error' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

const Banner: FC<BannerProps> = ({ className = '', icon, variant, children }) => {
  const icons = {
    success: <PiCheckCircleFill className='fill-green-400' />,
    warning: <PiWarningFill className='fill-yellow-400' />,
    error: <PiXCircleFill className='fill-red-400' />,
    neutral: <PiInfoFill className='fill-blue-400' />,
  };

  const renderIcon = icon ?? icons[variant];

  return (
    <div className={`banner banner-${variant} rounded-lg ${className}`}>
      <div className='grid grid-cols-[min-content_1fr] gap-4 items-start'>
        <div>{renderIcon}</div>
        <div className='grid gap-4'>{children}</div>
      </div>
    </div>
  );
};

export default Banner;
