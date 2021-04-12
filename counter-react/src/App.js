import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">

        <h1>Counter from React</h1>
        <Counter initialState={ 0 }/>

    </div>
  );
}

export default App;
