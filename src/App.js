import React, { useState } from 'react';
import './App.css';
import { SyncExample } from './Components/SyncExample';
import { AsyncExample } from './Components/AsyncExample';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <div
        style={{
          margin: '20px',
        }}
      >
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? 'Go to Async' : 'Go to Sync'}
        </button>
      </div>
      {toggle ? <SyncExample /> : <AsyncExample />}
    </div>
  );
}

export default App;
