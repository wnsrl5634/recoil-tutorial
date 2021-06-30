import React from 'react';
import { SyncAtomExample } from './SyncAtomExample';
import { TextContainer } from './TextContainer';
import { Label } from './Label';
import { InputExample } from './InputExample';

export const SyncExample = () => {
  return (
    <div>
      <hr />
      <h1>Font Selector</h1>
      <SyncAtomExample items={[20, 24, 40, 60]} />
      <hr />
      <h1>Current Font Value</h1>
      <TextContainer />
      <hr />
      <h1>Font 적용된 컴포넌트</h1>
      <Label text={'Hello, World'} />
      <hr />
      <h1>Selector Setting</h1>
      <div>
        <InputExample />
      </div>
      <hr />
    </div>
  );
};
