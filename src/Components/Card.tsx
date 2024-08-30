import React, { ReactElement, FC } from 'react';

type CardProps = {
  icon?: ReactElement;
  children: React.ReactNode;
  className?: string;
  iconStyle?: string;
};

const Card: FC<CardProps> = ({ icon, className = '', iconStyle, children }) => {
  return (
    <div className={`card ${className}`}>
      {icon && <div className={`card-icon ${iconStyle}`}>{icon}</div>}

      <div className='grid gap-4'>{children}</div>
    </div>
  );
};

export default Card;
