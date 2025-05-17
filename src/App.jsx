import './App.css'
import { useState } from 'react';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello');
  }

  return (
    <div>
      App
    </div>
  )
}

export default App
