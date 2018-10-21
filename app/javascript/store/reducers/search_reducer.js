import * as actionTypes from '../actions/actionTypes';

const initialState = {
  keyword: '',
  searchResult: [],
  isFetching: false,
  error: null
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SEARCH_ANIME_START:
      return {...state, isFetching: true, keyword: payload.q};
    case actionTypes.SEARCH_ANIME_SUCCESS:
      return {...state, isFetching: false, searchResult: payload.searchResult};
    case actionTypes.SEARCH_ANIME_FAILURE:
      return {...state, isFetching: false, error: payload.error};
    case actionTypes.CLEAR_SEARCH_RESULT:
      return {...state, searchResult: []};
    default:
      return state;
  }
};

export default reducer;