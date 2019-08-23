import React from 'react';
import { Parent } from './Parent';

export const GrandParent = () => {
  return (
    <>
      <h1>👴 Grandparent Component</h1>
      <Parent />
    </>
  );
};
