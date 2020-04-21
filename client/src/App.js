import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LogInPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';


function App() {
	return (
		<Router>
			<Switch>	
				<Route path="/user/signin" component={LogInPage} />
				<Route path="/user/signup" component={SignUpPage} />
				<Route path="/" component={LandingPage} />
			</Switch>
		</Router>
	);
}

export default App;