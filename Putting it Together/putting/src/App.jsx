import Person from "./components/Person";
import './App.css';

function App() {
  return (
    <div className="app">
      <Person firstName="Doe" lastName="Jane" age={45} hairColor="Black" />

      <Person firstName="Smith" lastName="John" age={88} hairColor="Brown" />

    </div>
  );
}

export default App;

