import logo from './logo.svg';
import './App.css';
import Form from "./Form";
import FormList from "./FormList";
import {useState} from "react";

function App() {
  const [observer, setObserver] = useState(false);

  const setObserverFunc = () => {
    setObserver(!observer);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Form</h1>
        <Form setObserver={setObserverFunc} />
        <FormList observer={observer} />
      </header>
    </div>
  );
}

export default App;
