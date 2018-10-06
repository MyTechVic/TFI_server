import React from 'react';
import { Button, Navbar, NavbarBrand, NavItem, NavLink, Nav } from 'reactstrap';
import logo from './tfiLoog.png'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authentication.js';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component {
  onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

  render() {
	//const {isAuthenticated, user} = this.props.auth;
	//const authLinks = {}
    return (
	      <div>
        	<Navbar color="light" light expand="md">
 	 			<NavbarBrand href="/"> <img src={logo} alt="Logo" /> </NavbarBrand>
 	 			 <Nav className="ml-auto" navbar>
		          	<NavItem>
		                <NavLink href="/"><Button outline color="danger">Logout</Button></NavLink>
		          	</NavItem>
	          	</Nav>
	        </Navbar>
	      </div>
	    );
	  }
}
Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navigation));