import React from 'react';
import Dinner from './dinner.js';
function App() {
  return (
    <div className="App">
      <Dinner dish="Biryani"/>
      <hr/>
      <Dinner dish="Chappali Kabab"/>
      <hr/>
      <Dinner dish="Kheer"/>
    </div>
  );
}

export default App;
