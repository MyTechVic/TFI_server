import React from "react";
import PropTypes from 'prop-types';

import { Form, FormGroup, Input, Container, Row, Col, Label } from "reactstrap";
import "./Search.css";
import axios from "axios";
import SearchBox from "react-search-box";

class Search extends React.Component {

  static propTypes = {
    handleCustomer: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      searchInfo: [],
      query: "",
      companyFilter: ""
    };

    this.itWorks = this.itWorks.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  search = query => {
    let filter = {};
    if (this.state.companyFilter) {
      filter = {"customerID": {$regex: ".*"+this.state.companyFilter+".*", $options: 'i'}};
    }

    let url = "http://localhost:5000/getData?filter=" + JSON.stringify(filter);
    axios.get(url).then(res => {
      const searchInfo = (res.data || []).map(obj => ({
        customerID: obj.customerID,
        company: obj.companyName,
        sinage: obj.sinageCodes,
        curtain: obj.curtainCodes,
        method: obj.Method,
        notes: obj.Notes
      }));

      this.setState({ searchInfo });
      console.log(searchInfo);
    });
  };

  itWorks() {
    this.setState({
      companyFilter: document.getElementById("exampleSearch").value
    });
  }

  handleSearch = (e) => {
    if (e.key === 'Enter') {
      this.search();
    }
  };

  handleCustomer = () => {

  };

  componentDidMount() {
    this.search("");
  }
  render() {
    const { query, searchInfo } = this.state;

    return (
      <div>
        <Container>
          <FormGroup>
            <Label for="exampleSearch" />
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="Search for a CumstomerID"
              onChange={this.itWorks}
              onKeyPress={this.handleSearch}
            />
          </FormGroup>
        </Container>
        {this.state.searchInfo.map(function(searchInfo, index) {
          return (
            <div key={index}>
              <h1 onClick={() => this.props.handleCustomer(searchInfo)}>
                {searchInfo.customerID.match(
                  new RegExp(this.state.companyFilter, "i")
                ) || this.state.companyFilter === ""
                  ? "customerID: " + searchInfo.customerID
                  : ""}
              </h1>
              {
                //      <p> Singcode: {searchInfo.sinage}</p>
                //      <p> Method: {searchInfo.method}</p>
                //      <p> Notes: {searchInfo.notes}</p>
              }
            </div>
          );
        }, this)}
      </div>
    );
  }
}

export default Search;
