import 'regenerator-runtime/runtime';
import { put } from 'redux-saga/effects';
import axios from '../../axios_anime';
import * as actions from '../actions/index';
import * as endpoints from '../../constants/endpoint_constants';

export function* getTopAnime(action) {
  yield put(actions.getTopAnimeStart());
  try {
    let url = endpoints.GET_TOP_ANIME;
    if (action.page) {
      url += `?page=${action.page}`;
    }
    if (action.itemPerPage) {
      url += `&item_per_page=${action.itemPerPage}`;
    }
    // console.log(url);
    const response = yield axios.get(url);
    // console.log(response.data);
    yield put(actions.getTopAnimeSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getTopAnimeFailure(error.response.data.errors));
  }
}

export function* getAnimeById(action) {
  yield put(actions.getAnimeByIdStart());
  try {
    let url = endpoints.ANIME_API + `/${action.id}`;
    // console.log(url);
    const response = yield axios.get(url);
    // console.log(response.data);
    yield put(actions.getAnimeByIdSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getAnimeByIdFailure(error.response.data.errors));
  }
}

export function* getRecentlyReviewedAnime(action) {
  yield put(actions.getRecentlyReviewedAnimeStart());
  try {
    let url = endpoints.GET_RECENTLY_REVIEWED_ANIME;
    if (action.page) {
      url += `?page=${action.page}`;
    }
    if (action.itemPerPage) {
      url += `&item_per_page=${action.itemPerPage}`;
    }
    // console.log(url);
    const response = yield axios.get(url);
    // console.log(response.data);
    yield put(actions.getRecentlyReviewedAnimeSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(
      actions.getRecentlyReviewedAnimesFailure(error.response.data.errors)
    );
  }
}

export function* getRecentReviews(action) {
  yield put(actions.getRecentReviewsStart());
  try {
    let url = endpoints.GET_RECENT_REVIEWS;
    if (action.page) {
      url += `?page=${action.page}`;
    }
    if (action.itemPerPage) {
      url += `&item_per_page=${action.itemPerPage}`;
    }
    // console.log(url);
    const response = yield axios.get(url);
    // console.log(response.data);
    yield put(actions.getRecentReviewsSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getRecentReviewsFailure(error.response.data.errors));
  }
}

export function* getGenresList(action) {
  yield put(actions.getGenresListStart());
  try {
    let url = endpoints.GET_GENRES_LIST;
    if (action.page) {
      url += `?page=${action.page}`;
    }
    if (action.itemPerPage) {
      url += `&item_per_page=${action.itemPerPage}`;
    }
    // console.log(url);
    const response = yield axios.get(url);
    // console.log(response.data);
    yield put(actions.getGenresListSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getGenresListFailure(error.response.data.errors));
  }
}

export function* getGenreTop(action) {
  yield put(actions.getGenreTopStart());
  try {
    let url = endpoints.GENRE_API + `/${action.id}`;
    if (action.limit) {
      url += `?limit=${action.limit}`;
    }
    // console.log(url);
    const response = yield axios.get(url);
    // console.log(response.data);
    yield put(actions.getGenreTopSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getGenreTopFailure(error.response.data.errors));
  }
}

export function* getMultipleGenreTop(action) {
  yield put(actions.getMultipleGenreTopStart());
  let data = [];
  try {
    for (var id in action.idArr) {
      let url = endpoints.GENRE_API + `/${action.idArr[id]}`;
      if (action.limit) {
        url += `?limit=${action.limit}`;
      }
      let response = yield axios.get(url);
      data.push(response.data);
    }
    yield put(actions.getMultipleGenreTopSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(actions.getMultipleGenreTopFailure(error.response.data.errors));
  }
}

export function* getReviewsByAnime(action) {
  yield put(actions.getReviewsByAnimeStart());
  try {
    let url;
    if (action.order) {
      url =
        endpoints.GET_REVIEWS_BY_ANIME +
        `?id=${action.id}` +
        `&order=${action.order}`;
    } else {
      url = endpoints.GET_REVIEWS_BY_ANIME + `?id=${action.id}`;
    }
    console.log(url);
    const response = yield axios.get(url);
    // console.log(response.data);
    yield put(actions.getReviewsByAnimeSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(actions.getReviewsByAnimeFailure(error.response.data.errors));
  }
}
