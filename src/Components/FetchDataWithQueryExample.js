import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { queryUserInfo, UserInfoAtom } from '../Atoms/UserInfoAtom';

export const FetchDataWithQueryExample = () => {
  const [query, setQuery] = useState({ userId: 1 });
  const user = useRecoilValue(queryUserInfo(query));
  const setUserInfo = useSetRecoilState(UserInfoAtom);

  useEffect(() => {
    setUserInfo(user);
  }, [user, setUserInfo]);

  return (
    <div>
      <div>
        <h3>이 input value로 user 구독 갱신</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const value = e.target[0].value;
            setQuery({ userId: value });
          }}
        >
          <input />
        </form>
      </div>
      <div>
        <span style={{ fontSize: '18px' }}>{JSON.stringify(user)}</span>
      </div>
    </div>
  );
};
