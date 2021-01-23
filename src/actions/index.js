import axios from 'axios';

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.

// action variables for get request
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

// action variables for post request
export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAILURE = 'POST_SMURF_FAILURE';

// thunk action for axios get request

export const fetchSmurf = () => dispatch => {
    dispatch({ type:FETCH_SMURF_START});
    axios 
        .get("http://localhost:3333/smurfs")
        .then((response)=>{
            console.log(response);
            dispatch({ type:FETCH_SMURF_SUCCESS, payload: response.data});
        })
        .catch(err => {
           
            dispatch({ type:FETCH_SMURF_FAILURE, payload:err});
        });
}

// thunk action for axios post request
export const postSmurf = (smurf) => dispatch => {
    dispatch({ type:POST_SMURF_START});
    axios 
        .post("http://localhost:3333/smurfs", smurf)
        .then((response)=>{
            console.log(response);
            dispatch({ type:POST_SMURF_SUCCESS, payload: response.data});
        })
        .catch(err => {
            console.log(err.status)
            dispatch({ type:POST_SMURF_FAILURE, payload:err.data});
        });
}
