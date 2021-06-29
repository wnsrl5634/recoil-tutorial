import { atom, selector } from 'recoil';

export const CurrentFontSizeAtom = atom({
  key: 'CurrentFontSizeAtom',
  default: null,
});

export const fontSizeState = selector({
  key: 'fontSizeState',
  get: ({ get }) => {
    const fontSize = get(CurrentFontSizeAtom);
    const unit = 'px';
    return `${fontSize}${unit}`;
  },
  set: ({ set }, newValue) => {
    set(CurrentFontSizeAtom, newValue);
  },
});
