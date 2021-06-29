import React from 'react';
import { useSetRecoilState } from 'recoil';
import { fontSizeState } from '../Atoms/Atom';

export const InputExample = () => {
  const setFontSize = useSetRecoilState(fontSizeState);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const value = e.target[0].value;
          setFontSize(Number(value));
        }}
      >
        <input />
      </form>
    </div>
  );
};
