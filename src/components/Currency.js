import React, { Component } from "react";
import { connect } from "react-redux";
import fetchData from '../actions/fetchCurrency'
import '../styles/currency.css'

const Card = (props) => {
  console.log(props.data);
  const priceTrend = <span className="align-top">
    { Math.sign(props.data['1d']['price_change_pct']) == 1 ? (<i class="fa fa-sort-up"></i>)
    :(<i class="fa fa-sort-down"></i>)}
  </span>;
  return(
    <div className="card">
      <div className="card-body">
        <div>
              <p>
                <img src={props.data['logo_url']} alt={props.data['name']} width="20" height="20"/>
                <a className="ml-2">{props.data['name']}</a>
              </p>
              <p>{props.data['currency']} - USD</p>
              <p>$ {Number(props.data['price']).toFixed(2)}
              ({Number(props.data['1d']['price_change_pct']).toFixed(3)} {priceTrend})</p>
          </div>
        </div>
    </div>
  )
}

class Currency extends Component {


    componentDidMount = () => {
        this.props.fetchData('https://api.nomics.com/v1/currencies/ticker?key=96bd9520ece23491ac95e92176e88196&ids=BTC,ETH,XRP,BCH,LTC&interval=1h,1d');
    }

    render = () => {
      // console.log(this.props.data);
      // this.props.data && this.props.data.map( data => {
      //   console.log(data);
      // })
      const cryptoData = this.props.data && this.props.data.map( (data, id) => {
        return (
            <Card key={id} data={data}/>
        );
      });


      return (
        <div className="currency-content">
          <div className="container">
            <h5>Live cryptocurrency data:</h5>
            {this.props.pending ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
              ) : (
            this.props.data ?
            <div className="cryptoData">
              {cryptoData}
            </div>
            : (<p>Error. Data is not received.</p>))
            }
          </div>
        </div>
      )
    }
}

const mapStateToProps = state => {
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
