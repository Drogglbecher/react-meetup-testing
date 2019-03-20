import React from 'react';

const renderMergedProps = (component: any, ...rest: any) => {
  const theProps = Object.assign({}, ...rest);
  return React.createElement(component, theProps);
};

export default renderMergedProps;
