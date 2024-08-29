import React from 'react';
import BadgesBlock from './Components/BadgesBlock';

const App = () => {
  return (
    <main className='grid gap-20 justify-center'>
      <h1 className='h1'>React Component Library</h1>
      <div className='components'>
        <BadgesBlock />
      </div>
    </main>
  );
};

export default App;
