import React from 'react';
import { PiCheckCircleFill, PiWarningFill, PiXCircleFill, PiInfoFill } from 'react-icons/pi';

interface Banner {
  children: React.ReactNode;
  variant: 'success' | 'warning' | 'error' | 'neutral';
}

const Banner = ({ variant, children }: Banner) => {
  const childrenArray = React.Children.toArray(children);

  const renderBannerIcon = () => {
    switch (variant) {
      case 'success':
        return <PiCheckCircleFill style={{ fill: '#34D399' }} />;
        break;

      case 'warning':
        return <PiWarningFill style={{ fill: '#FBBF24' }} />;
        break;

      case 'error':
        return <PiXCircleFill style={{ fill: '#F87171' }} />;
        break;

      case 'neutral':
        return <PiInfoFill style={{ fill: '#60A5FA' }} />;
        break;
    }
  };

  return children ? (
    <div className={`banner banner-${variant}`}>
      <div className='grid grid-cols-[min-content_1fr] gap-4 items-center'>
        {renderBannerIcon()}
        {childrenArray[0]}

        {childrenArray.length > 1 && <div className='col-start-2'>{childrenArray.slice(1).map((child) => child)}</div>}
      </div>
    </div>
  ) : null;
};

export default Banner;
