import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { CurrentFontSizeAtom } from '../Atoms/Atom';

export const Selector = (props) => {
  const { items } = props;
  const [currentFrontSizeAtom, setCurrentFrontSizeAtom] =
    useRecoilState(CurrentFontSizeAtom);
  const handleClick = (select) => {
    setCurrentFrontSizeAtom(select);
  };

  useEffect(() => {
    console.log('currentFrontSizeAtom', currentFrontSizeAtom);
  }, [currentFrontSizeAtom]);

  return (
    <div className={`item-list`}>
      {items.map((v, i) => {
        return (
          <div
            key={i}
            className={`item-box`}
            onClick={() => {
              handleClick(v);
            }}
          >
            <span>{v}</span>
          </div>
        );
      })}
    </div>
  );
};
