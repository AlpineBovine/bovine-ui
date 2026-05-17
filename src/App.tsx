import { useState } from 'react';

import { Button } from './components/Button/Button';
import { Typography } from './components/Typography/Typography';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main id="center">
      <div style={{ display: 'grid', gap: '18px', maxWidth: 560, width: '100%', textAlign: 'center' }}>
        <Typography as="h1" variant="title">
          Bovine UI component demo
        </Typography>

        <Typography variant="body">
          This page demonstrates the shared theme, typography, and component composition used by the design system.
        </Typography>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <Button primary label="Primary action" onPress={() => setCount((value) => value + 1)} />
          <Button label="Secondary action" onPress={() => setCount((value) => value + 1)} />
        </div>

        <Typography variant="caption">
          Button interactions are captured and rendered using the shared `Button` and `Typography` components.
        </Typography>

        <Typography variant="body">
          Clicked {count} {count === 1 ? 'time' : 'times'}.
        </Typography>
      </div>
    </main>
  );
}

export default App;
