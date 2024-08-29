import React from 'react';
import classNames from 'classnames';

interface Badge {
  children: React.ReactNode;
  shape?: 'pill' | 'square';
  color?: string;
}

const Badge = ({ children, shape, color }: Badge) => {
  const badgeClasses = classNames({
    'rounded-full': shape === 'pill',
    'rounded-sm': shape === 'square',
    [`badge-${color}`]: color,
  });

  return (
    <div className={`badge ${badgeClasses}`}>
      <p>{children}</p>
    </div>
  );
};

export default Badge;
