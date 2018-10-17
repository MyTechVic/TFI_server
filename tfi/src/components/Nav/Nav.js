import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authentication";
import { withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "./tfiLoog.png";

class Navigation extends React.Component {
	onLogout(e) {
		e.preventDefault();
		this.props.logoutUser(this.props.history);
	}

	render() {
		const { isAuthenticated, user } = this.props.auth;
		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<a
					href=""
					className="nav-link"
					onClick={this.onLogout.bind(this)}
				>
					{user.name}
					<Button outline color="danger">
						{" "}
						Logout{" "}
					</Button>
				</a>
			</ul>
		);

		const guestLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/">
						Sign In
					</Link>
				</li>
			</ul>
		);
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					<img src={logo} title={user.name} alt="Logo" />
				</Link>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					{isAuthenticated ? authLinks : guestLinks}
				</div>
			</nav>
		);

		// return (
		// 	<div>
		// 		<Navbar color="light" light expand="md">
		// 			<NavbarBrand href="/">
		// 				{" "}
		// 				{" "}
		// 			</NavbarBrand>
		// 			<Nav className="ml-auto" navbar>
		// 				<NavItem>
		// 					<NavLink href="/">
		// 						<Button outline color="danger">
		// 							Logout
		// 						</Button>
		// 					</NavLink>
		// 				</NavItem>
		// 			</Nav>
		// 		</Navbar>
		// 	</div>
		// );
	}
}

Navigation.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ logoutUser }
)(withRouter(Navigation));
