import Search from "../Search/Search";
import UserInput from "../UserInput/UserInput";
import Navigation from "../Nav/Nav";

import React from "react";

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      customer: null
    };

    this.handleCustomer = this.handleCustomer.bind(this);
  }

  handleCustomer(customer) {
    this.setState({customer: customer});
  }

	render() {
    const searchProps = {
      handleCustomer: this.handleCustomer,
    };

    const inputProps = {
      customer: this.state.customer
    };

		return (
			<div className="App">
				<Navigation />
				<Search {...searchProps} />
				<UserInput {...inputProps} />
			</div>
		);
	}
}

export default Dashboard;
