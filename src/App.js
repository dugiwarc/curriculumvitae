import React from "react";
import NotFound from "./components/NotFound/NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route render={() => <NotFound />} />
				</Switch>
			</div>
		);
	}
}

export default App;
