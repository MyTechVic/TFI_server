import React from "react";
import { Form, FormGroup, Input, Container, Row, Col, Label } from "reactstrap";
import "./Search.css";
import axios from "axios";
import SearchBox from "react-search-box";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInfo: [],
      query: "",
      companyFilter: ""
    };

    this.itWorks = this.itWorks.bind(this);
  }

  search = query => {
    axios.get("http://localhost:5000/getData").then(res => {
      const searchInfo = (res.data || []).map(obj => ({
        customerID: obj.customerID,
        company: obj.companyName,
        sinage: obj.sinageCodes,
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
            />
          </FormGroup>
        </Container>
        {this.state.searchInfo.map(function(searchInfo, index) {
          return (
            <div key={index}>
              <h1>
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
