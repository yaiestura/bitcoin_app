import React, { Component } from "react";
import { connect } from "react-redux";
import fetchData from '../actions/fetchCurrency'

// New api https://api.nomics.com/v1/markets?key=your-api-key-goes-here
// http://docs.nomics.com/#operation/getCurrenciesTicker

const Cards = (props) => {
    const bpiData = props.data['bpi'];
    const timeData = props.data['time'];
    const currentTime = timeData && timeData["updated"];
    const cardItems = bpiData && Object.keys(bpiData).map( item => {
      return (
        <div>
          <p>{bpiData[item].code}</p>
          <p>{bpiData[item].rate_float}</p>
        </div>
      );
    })
    return (
        <div className="card d-flex">
          <div className="card-body">
            <p>Data is valid for {currentTime}</p>
            {cardItems}
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
          <Cards data={this.props.data}/>
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
