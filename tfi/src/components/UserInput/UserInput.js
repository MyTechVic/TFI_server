import React from "react";
import {
	Button,
	FormGroup,
	Label,
	Input,
	Container,
	Row,
	Col
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "./UserInput.css";
import axios from "axios";
import PropTypes from "prop-types";

class UserInput extends React.Component {

  static propTypes = {
    customer: PropTypes.object,
  };

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.resetName = this.resetName.bind(this);

		this.state = {
			customerID: "",
			companyName: "",
			curtainCodes: "",
			sinageCodes: "",
			Notes: "",
			Method: ""
		};
	}

	// create an error alert function to show duplication of new job.

	onChange = e => {
		// Because we named the inputs to match their corresponding values in state, it's
		// super easy to update the state
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value });
	};

	resetName = event => {
		this.setState({
			customerID: "",
			companyName: "",
			curtainCodes: "",
			sinageCodes: "",
			Notes: "",
			Method: ""
		});
	};

	onSubmit(e) {
		e.persist();
		// get our form data out of state
		const tfiInfo = {
			customerID: this.state.customerID,
			companyName: this.state.companyName,
			curtainCodes: this.state.curtainCodes,
			sinageCodes: this.state.sinageCodes,
			Notes: this.state.Notes,
			Method: this.state.Method
		};

		console.log("TFI INFORMATION", tfiInfo);
		console.log("STATE", this.state);
		axios
			.post(" http://localhost:5000/saveInfo/add", tfiInfo)
			.then(res => console.log("RESULTS", res.data));
	}

  componentWillReceiveProps(newProps) {
    const {customer} = newProps;
    if (customer && customer.customerID !== this.state.customerID) {
      console.log(customer);
      this.setState({
        customerID: customer.customerID,
        companyName: customer.company,
        curtainCodes: customer.curtain,
        sinageCodes: customer.sinage,
        Notes: customer.notes,
        Method: customer.method,
      });
    }
  }

	render() {
		return (
			<Container>
				<AvForm onSubmit={this.onSubmit}>
					<Row>
						<Col sm="3">
							<FormGroup>
								<Input
									value={this.state.companyName}
									onChange={this.onChange}
									type="text"
									name="companyName"
									placeholder="Company Name"
								/>
							</FormGroup>
						</Col>
						<FormGroup>
							<Col sm="9">
								<AvField
									value={this.state.customerID}
									helpMessage="Customer ID must be unique and is required"
									required
									onChange={this.onChange}
									type="text"
									name="customerID"
									placeholder="Customer ID"
								/>
							</Col>
						</FormGroup>
					</Row>
					<Row>
						<Col
							md={{ size: 9, offset: 6 }}
							sm={{ size: 10, offset: 6 }}
						>
							<div className="NewJobButton">
								<Button
									className="New_button"
									outline
									color="info"
									onClick={this.resetName}
								>
									New Job
								</Button>{" "}
							</div>
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<FormGroup className="FormGroupsTfi">
								<Label for="exampleText">Curtain Codes</Label>
								<Input
									onChange={this.onChange}
									value={this.state.curtainCodes}
									style={{ height: "200px" }}
									type="textarea"
									name="curtainCodes"
								/>
							</FormGroup>
						</Col>
						<Col md="6">
							<FormGroup className="FormGroupsTfi">
								<Label for="exampleText">Sinage Codes</Label>
								<Input
									onChange={this.onChange}
									value={this.state.sinageCodes}
									style={{ height: "200px" }}
									type="textarea"
									name="sinageCodes"
								/>
							</FormGroup>
						</Col>
						<Col md="6">
							<FormGroup className="FormGroupsTfi">
								<Label for="exampleText">Notes</Label>
								<Input
									onChange={this.onChange}
									value={this.state.Notes}
									style={{ height: "200px" }}
									type="textarea"
									name="Notes"
								/>
							</FormGroup>
						</Col>
						<Col md="6">
							<FormGroup className="FormGroupsTfi">
								<Label for="exampleText">Method</Label>
								<Input
									onChange={this.onChange}
									value={this.state.Method}
									style={{ height: "200px" }}
									type="textarea"
									name="Method"
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col
							md={{ size: 10, offset: 6 }}
							sm={{ size: 10, offset: 6 }}
						>
							<div>
								<Button
									className="submit_button"
									value="submit"
									outline
									color="success"
								>
									Save Job
								</Button>{" "}
							</div>
						</Col>
					</Row>
				</AvForm>
			</Container>
		);
	}
}
export default UserInput;
