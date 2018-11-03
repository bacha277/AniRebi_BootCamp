import 'regenerator-runtime/runtime';
import { put } from 'redux-saga/effects';

import axios from '../../axios_anime';
import * as actions from '../actions/index';
import * as endpoints from '../../constants/endpoint_constants';

export function* fetchUserInfo(action) {
  const url = `${endpoints.USER_API}/${action.id}`;
  try {
    const response = yield axios.get(url);
    if (response.data.success === false){
      yield put(actions.getProfileFailue(response.data.errors));
    } else {
      yield put(actions.getProfileSuccess(response.data));
    }
  } catch (errors) {
    yield put(actions.getProfileFailue(errors));
  }
}