import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { FontSizeAtom } from '../Atoms/FontSizeAtom';

export const SyncAtomExample = (props) => {
  const { items } = props;
  const [currentFrontSizeAtom, setCurrentFrontSizeAtom] =
    useRecoilState(FontSizeAtom);
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
