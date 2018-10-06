import Search from "../Search/Search";
import UserInput from "../UserInput/UserInput";
import Navigation from "../Nav/Nav";

import React from "react";

class Dashboard extends React.Component {
	render() {
		return (
			<div className="App">
				<Navigation />
				<Search />
				<UserInput />
			</div>
		);
	}
}

export default Dashboard;
