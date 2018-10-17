import React from "react";
import { FormGroup, Input, Container, Row, Col, Label } from "reactstrap";
import "./Search.css";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInfo: [],
      companyFilter: ""
    };

    this.itWorks = this.itWorks.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  search = query => {
    let filter = {};
    if (this.state.companyFilter) {
      filter = {
        customerID: {
          $regex: ".*" + this.state.companyFilter + ".*",
          $options: "i"
        }
      };
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

  handleSearch = e => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  componentDidMount() {
    this.search("");
  }
  render() {
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
        <Container>
          <div className="SearchResults">
            {this.state.searchInfo.map(function(searchInfo, index) {
              return (
                <Container key={index}>
                  <Row>
                    <Col>
                      <div>
                        <p
                          className="returned"
                          onClick={() => this.props.handleCustomer(searchInfo)}
                        >
                          {searchInfo.customerID.match(
                            new RegExp(this.state.companyFilter, "i")
                          ) || this.state.companyFilter === ""
                            ? searchInfo.customerID
                            : ""}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
              );
            }, this)}
          </div>
        </Container>
      </div>
    );
  }
}

export default Search;
