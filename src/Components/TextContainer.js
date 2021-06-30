import React from 'react';
import { useRecoilValue } from 'recoil';
import { FontSizeAtom } from '../Atoms/FontSizeAtom';

export const TextContainer = () => {
  const fontSize = useRecoilValue(FontSizeAtom);
  return (
    <div>
      <h1>font size: {fontSize}</h1>
    </div>
  );
};
