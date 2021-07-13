import logo from './logo.svg';
import './App.css';
import {Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import logIn from './logIn';
import register from './register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/logIn" component={logIn} />
      <Route exact path="/register" component={register} />

       
      </header>
    </div>
  );
}

export default App;
