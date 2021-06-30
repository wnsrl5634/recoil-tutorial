import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { CurrentUserInfoState } from '../Atoms/UserInfoAtom';

export const CreateSelectorExample = () => {
  const [currentId, setCurrentId] = useState(0);
  const userInfo = useRecoilValue(CurrentUserInfoState(currentId));

  return (
    <div>
      <div>
        <h3>이 input value로 atom selector 생성</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const value = e.target[0].value;
            setCurrentId(value);
          }}
        >
          <input />
        </form>
      </div>
      <div>
        <span style={{ fontSize: '18px' }}>{JSON.stringify(userInfo)}</span>
      </div>
    </div>
  );
};
