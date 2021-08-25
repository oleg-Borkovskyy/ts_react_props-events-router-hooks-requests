import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card onClick={(number)=>console.log(number)} width='200px' height='200px' variant={CardVariant.outline}>
        <button>button</button>
      </Card>
    </div>
  );
};

export default App;