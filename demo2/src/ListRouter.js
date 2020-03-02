import React, { Component, lazy, Suspense } from "react";
import './styles/App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import MyErrorBoundary from "./MyErrorBoundary";

const Children = React.lazy(() => import("./components/Children"));
const ChildrenBoy = React.lazy(() => import("./components/ChildrenBoy"));

class ListRouter extends Component {
	render() {
		return (
			<Router>
				<a>
					<Link to="/children">Children</Link>
				</a>
				<a>
					<Link to="/childrenboy"> ChildrenBoy </Link>
				</a>

				<Switch>
					<Route path="/children">
						<Suspense fallback={<div>Loading...</div>}>
							<Children />
						</Suspense>
					</Route>
					<Route path="/childrenboy">
						<Suspense fallback={<div>Loading...</div>}>
							<ChildrenBoy />
						</Suspense>
					</Route>
				</Switch>
			</Router>
		);
	}
}


export default ListRouter;
