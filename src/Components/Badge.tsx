import React from 'react';
import classNames from 'classnames';

const Badge = ({ children, shape, variant }) => {
  const badgeClasses = classNames({
    'rounded-full': shape === 'pill',
    'rounded-sm': shape === 'square',
    [`bg-${variant}-200 text-${variant}-800`]: variant,
  });

  return <div className={`${badgeClasses}`}>{children}</div>;
};

export default Badge;
