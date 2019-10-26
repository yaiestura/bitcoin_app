import React, { Component } from "react";
import { connect } from "react-redux";
import fetchData from '../actions/fetchCurrency'


const Card = (props) => {
    const time = props["data"]["time"];
    return (
        <div className="card d-flex">
          <div className="card-body">
            {props.data.chartName}
          </div>
        </div>
    )
}

class Currency extends Component {

    componentDidMount = () => {
        this.props.fetchData('https://api.coindesk.com/v1/bpi/currentprice.json');
    }

    render = () => {

      return (
        <div>
          <p>Data:</p>

          {this.props.pending ? (
              <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
              </div>
            ) : (
        this.props.data ?
        <div>
          <h2>{this.props.data.disclaimer}</h2>
          <Card data={this.props.data}/>
        </div>
         : (<p>Error. Data is not received.</p>))
           }
        </div>
      )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        data: state.currencyReducer.currency,
        pending: state.currencyReducer.pending
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(fetchData(url))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Currency);
