import React from 'react';
import { useRecoilValue } from 'recoil';
import { UserListAtom } from '../Atoms/UserInfoAtom';

export const FetchDataExample = () => {
  const users = useRecoilValue(UserListAtom);
  return (
    <div>
      <span style={{ fontSize: '18px' }}>{JSON.stringify(users)}</span>
    </div>
  );
};
