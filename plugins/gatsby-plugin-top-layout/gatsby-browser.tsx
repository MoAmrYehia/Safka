import React from 'react'
import TopLayout from './TopLayout';

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{console.log('index')}{element}</TopLayout>;
};
