import React from 'react';
import './App.css';
import { Selector } from './Components/SyncAtomExample';
import { TextContainer } from './Components/TextContainer';
import { Label } from './Components/Label';
import { InputExample } from './Components/InputExample';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
