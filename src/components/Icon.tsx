import React from 'react';

require('icons/money.svg');
require('icons/label.svg');
require('icons/statistics.svg');

type Props = {
  name: string
}

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {
  importAll(require.context('icons', true, /\.svg$/));
} catch (error) {
  console.log('error');
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#'+props.name}/>
    </svg>
  );
};
export {Icon};