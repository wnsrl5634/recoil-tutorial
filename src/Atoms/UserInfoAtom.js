import { atom, selector, selectorFamily } from 'recoil';
import { fetchUserList, fetchUserWithId } from '../Api/Api';

export const UserInfoAtom = atom({
  key: '@UserAtom',
  default: null,
});

export const queryUserInfo = selectorFamily({
  key: '@UserAtom/default',
  get: (query) => async () => {
    const response = await fetchUserWithId(query);
    if (response.error) throw new Error();
    return response.data;
  },
});

export const UserListAtom = atom({
  key: '@UserListAtom',
  default: selector({
    key: '@UserListAtom/default',
    get: async () => {
      const response = await fetchUserList();
      if (response.error) throw new Error();
      return response.data;
    },
  }),
});

export const CurrentUserInfoState = selectorFamily({
  key: '@UserListAtom/CurrentUserInfoState',
  get:
    (userId) =>
    ({ get }) => {
      const userInfo = get(UserListAtom);
      return userInfo.filter((v) => v.id === userId);
    },
});
