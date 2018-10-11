import React from "react";
import { Button, Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";
import logo from "./tfiLoog.png";

class Navigation extends React.Component {
	render() {
		//const {isAuthenticated, user} = this.props.auth;
		//const authLinks = {}
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">
						{" "}
						<img src={logo} alt="Logo" />{" "}
					</NavbarBrand>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/">
								<Button outline color="danger">
									Logout
								</Button>
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
