import React from "react";
import history from 'utils/history.utils';
import { Router, Route, Switch } from "react-router-dom";
// Pages
import HomePage from "components/pages/lazy/HomePage.lazy.component";
import DesktopPage from "components/pages/lazy/DesktopPage.lazy.component";
import TransactionsPage from "components/pages/lazy/TransactionsPage.lazy.component";
import Page404 from "components/pages/Page404.component";


const Routes = ()=> {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/desktop" component={DesktopPage} />
				<Route exact path="/transactions" component={TransactionsPage} />
				<Route component={Page404} />
			</Switch>
		</Router>
	);
};

export default Routes;
