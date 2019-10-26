
const initialState = {
    currency: {},
    pending: false,
    error: false

};

export default function currencyReducer(state = initialState, action) {

    switch (action.type) {

      case "FETCH_CURRENCY": {

        if (action.payload) {
          return { ...state, currency: action.payload, pending: false, error: false }
        }

        break
      }

      case "FETCH_CURRENCY_PENDING": {

      return { ...state, currency: {}, pending: true, error: false }

      }

      case "FETCH_CURRENCY_ERROR": {

      return { ...state, currency: {}, pending: false, error: true }

    }
      default:
        return state;
  }
}