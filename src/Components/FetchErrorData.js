import React from 'react';
import { atom, selector, useRecoilValue } from 'recoil';
import { fetchError } from '../Api/Api';

const ErrorAtom = atom({
  key: '@ErrorAtom',
  default: selector({
    key: '@ErrorAtom/default',
    get: async () => {
      const response = await fetchError();
      if (response.error) throw new Error();
      return response.data;
    },
  }),
});

export const FetchErrorData = () => {
  const error = useRecoilValue(ErrorAtom);
  return (
    <div>
      <span style={{ fontSize: '18px' }}>{JSON.stringify(error)}</span>
    </div>
  );
};
