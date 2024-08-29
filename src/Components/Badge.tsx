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
    [`bg-${color}-200 text-${color}-800`]: color,
  });

  return <div className={`w-10 h-2 ${badgeClasses}`}>{children}</div>;
};

export default Badge;
