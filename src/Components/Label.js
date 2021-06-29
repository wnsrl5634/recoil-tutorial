import React from 'react';
import { useRecoilValue } from 'recoil';
import { fontSizeState } from '../Atoms/Atom';

export const Label = (props) => {
  const { text } = props;
  const fontSize = useRecoilValue(fontSizeState);
  return (
    <div>
      <p
        style={{
          fontSize,
        }}
      >
        {text}
      </p>
    </div>
  );
};
