import { Switch, Route  } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import './App.scss';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/hats" component={HatsPage} /> 
      </Switch>
    </div>
  );
}

export default App;
