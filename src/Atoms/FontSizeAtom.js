import { atom, selector } from 'recoil';

export const FontSizeAtom = atom({
  key: '@FontSizeAtom',
  default: null,
});

export const fontSizeState = selector({
  key: '@FontSizeAtom/fontSizeState',
  get: ({ get }) => {
    const fontSize = get(FontSizeAtom);
    const unit = 'px';
    return `${fontSize}${unit}`;
  },
  set: ({ set }, newValue) => {
    set(FontSizeAtom, newValue);
  },
});
