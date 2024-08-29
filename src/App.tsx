import React from 'react';
import Badge from './Components/Badge';

const App = () => {
  return (
    <main className='min-h-svh grid place-content-center'>
      <div className='flex gap-4 items-center'>
        <Badge shape='square' color='red'>
          Badge
        </Badge>
      </div>
    </main>
  );
};

export default App;
