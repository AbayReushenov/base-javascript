import { useState } from 'react';
import './Counter.css';

export default function Counter(props) {
  const [state, setState] = useState(props.initialState);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState((prevState) => prevState + 1)}><b> + </b></button>
      <button onClick={() => setState((prevState) => prevState - 1)}><b> - </b></button>
      <button onClick={() => setState(props.initialState)}><b>Сбросить</b></button>
    </div>
  );
}
