import './App.css';
import Function from './function-component/Function';
import Class from './class-component/Class';

function App() {
  return (
    <div>
      <div className="App">
        <Function/>
      </div>
      <div className="App">
        <Class/>
      </div>
    </div>
  );
}

export default App;
