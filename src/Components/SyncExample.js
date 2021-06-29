import React from 'react';
import { Selector } from './SyncAtomExample';
import { TextContainer } from './TextContainer';
import { Label } from './Label';
import { InputExample } from './InputExample';

export const SyncExample = () => {
  return (
    <>
      <hr />
      <h1>Font Selector</h1>
      <Selector items={[20, 24, 40, 60]} />
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
    </>
  );
};
