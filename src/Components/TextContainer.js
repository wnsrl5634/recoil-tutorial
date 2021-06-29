import React from 'react';
import { useRecoilValue } from 'recoil';
import { CurrentFontSizeAtom } from '../Atoms/Atom';

export const TextContainer = () => {
  const currentFontSizeAtom = useRecoilValue(CurrentFontSizeAtom);
  return (
    <div>
      <h1>{currentFontSizeAtom}</h1>
    </div>
  );
};
