import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Tags} from './views/Tags';
import {Money} from './views/Money';
import {Details} from './views/Details';
import {NoMatch} from './views/NoMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';


const AppWrapper = styled.div`
     color:#333;
`;

function App() {
		return (
			<AppWrapper>
					<Router>
							<Switch>
									<Route exact path="/tags/:id">
											<Tag/>
									</Route>
									<Route exact path="/tags">
											<Tags/>
									</Route>
									<Route exact path="/money">
											<Money/>
									</Route>
									<Route exact path="/details">
											<Details/>
									</Route>
									<Redirect exact from="/" to="/money"/>
									<Route path="*">
											<NoMatch/>
									</Route>
							</Switch>
					</Router>
			</AppWrapper>
		);
}

export default App;
