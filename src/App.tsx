import React from 'react';
import './App.scss';
import User from './components/user/User';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <User />
      </div>
    </div>
  );
}

export default App;
