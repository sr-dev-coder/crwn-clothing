import { Switch, Route  } from 'react-router-dom';
import './App.scss';
import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-signup-page/sign-in-and-signup-page.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/shop" component={ShopPage} /> 
        <Route path="/sign" component={SignInAndSignUp} /> 
      </Switch>
    </div>
  );
}

export default App;
