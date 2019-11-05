export const FETCH_CURRENCY_PENDING = 'FETCH_CURRENCY_PENDING';
export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export const FETCH_CURRENCY_ERROR = 'FETCH_CURRENCY_ERROR';

function fetchCurrency(payload) {
    return {
        type: FETCH_CURRENCY,
        payload
    }
}

function fetchCurrencyPending() {
    return {
        type: FETCH_CURRENCY_PENDING
    }
}


function fetchCurrencyError(error) {
    return {
        type: FETCH_CURRENCY_ERROR,
        error
    }
}

export default function fetchData(url) {
    return dispatch => {
        dispatch(fetchCurrencyPending());
        fetch(url , { headers: { accept: "Accept: application/json" } })
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchCurrency(res));
        })
        .catch(error => {
            dispatch(fetchCurrencyError(error));
        })
    }
}
