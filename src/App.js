import React from 'react';
import { auth } from './firebase/firebase.utils';
import { Switch, Route  } from 'react-router-dom';
import './App.scss';
import Header from './component/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-signup-page/sign-in-and-signup-page.component';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route path="/shop" component={ShopPage} /> 
          <Route path="/sign" component={SignInAndSignUp} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
