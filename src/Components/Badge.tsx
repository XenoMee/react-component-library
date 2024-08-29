import React from 'react';
import classNames from 'classnames';

interface Badge {
  children: React.ReactNode;
  shape?: 'pill' | 'square';
  variant?: string;
}

const Badge = ({ children, shape, variant }: Badge) => {
  const badgeClasses = classNames({
    'rounded-full': shape === 'pill',
    'rounded-sm': shape === 'square',
    [`bg-${variant}-200 text-${variant}-800`]: variant,
  });

  return <div className={`w-10 h-2 ${badgeClasses}`}>{children}</div>;
};

export default Badge;
