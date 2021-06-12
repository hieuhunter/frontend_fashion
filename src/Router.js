import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Banner from './Component/Banner/index';
import Product from './Component/Product/Product';
import Typo from './Component/Typo/Typo';
import Register from './Component/Register&&Login/Register';
import Login from './Component/Register&&Login/Login';
import Detail from './Component/Details';
import Contact from './Component/Contact';
import Product_Brand from './Component/Product/Product_Brand';
import Personal from './Component/Register&&Login/Personal';
import Cart from './Component/Cart';
import Checkout from './Component/Checkout';
import checkouttc from './Component/Checkout/checkouttc';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Banner} />
				<Route exact path="/Product/:id" component={Product} />
				<Route exact path="/Product_Brand/:id" component={Product_Brand} />
				<Route exact path="/Typo" component={Typo} />
				<Route exact path="/Register" component={Register} />
				<Route exact path="/Login" component={Login} />
				<Route exact path="/Cart" component={Cart} />
				<Route exact path="/Detail/:id" component={Detail} />
				<Route exact path="/Contact" component={Contact} />
				<Route exact path="/Personal" component={Personal} />
				<Route exact path="/Checkout" component={Checkout} />
				<Route exact path="/Checkouttc" component={checkouttc} />
			
			</Switch>
		</Router>
	);
};
export default Routes;
