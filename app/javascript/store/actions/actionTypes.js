// actions for authentication
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'AUTH_INITIATE_LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const START_PROCESSING = 'START_PROCESSING';
export const FINISH_PROCESSING = 'FINISH_PROCESSING';
export const AUTH_CHECK_STATE = 'AUTH_CHECK_STATE';
export const AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD';
export const AUTH_FORGOT_PASSWORD_COMPLETE = 'AUTH_FORGOT_PASSWORD_COMPLETE';
export const AUTH_RESET_PASSWORD = 'AUTH_RESET_PASSWORD';
export const AUTH_RESET_PASSWORD_COMPLETE = 'AUTH_RESET_PASSWORD_COMPLETE';
export const ERROR_PROCESSING = 'ERROR_PROCESSING';

//actions for get top anime
export const GET_TOP_ANIME = 'GET_TOP_ANIME';
export const GET_TOP_ANIME_START = 'GET_TOP_ANIME_START';
export const GET_TOP_ANIME_SUCCESS = 'GET_TOP_ANIME_SUCCESS';
export const GET_TOP_ANIME_FAILURE = 'GET_TOP_ANIME_FAILURE';

//actions for get genres list
export const GET_GENRES_LIST = 'GET_GENRES_LIST';
export const GET_GENRES_LIST_START = 'GET_GENRES_LIST_START';
export const GET_GENRES_LIST_SUCCESS = 'GET_GENRES_LIST_SUCCESS';
export const GET_GENRES_LIST_FAILURE = 'GET_GENRES_LIST_FAILURE';

//action for get top anime of a genre
export const GET_GENRE_TOP = 'GET_GENRE_TOP';
export const GET_GENRE_TOP_START = 'GET_GENRE_TOP_START';
export const GET_GENRE_TOP_SUCCESS = 'GET_GENRE_TOP_SUCCESS';
export const GET_GENRE_TOP_FAILURE = 'GET_GENRE_TOP_FAILURE';

//action for get top anime of multiple genres
export const GET_MULTIPLE_GENRE_TOP = 'GET_MULTIPLE_GENRE_TOP';
export const GET_MULTIPLE_GENRE_TOP_START = 'GET_MULTIPLE_GENRE_TOP_START';
export const GET_MULTIPLE_GENRE_TOP_SUCCESS = 'GET_MULTIPLE_GENRE_TOP_SUCCESS';
export const GET_MULTIPLE_GENRE_TOP_FAILURE = 'GET_MULTIPLE_GENRE_TOP_FAILURE';

//actions for get anime by id
export const GET_ANIME_BY_ID = 'GET_ANIME_BY_ID';
export const GET_ANIME_BY_ID_START = 'GET_ANIME_BY_ID_START';
export const GET_ANIME_BY_ID_SUCCESS = 'GET_ANIME_BY_ID_SUCCESS';
export const GET_ANIME_BY_ID_FAILURE = 'GET_ANIME_BY_ID_FAILURE';

//action for search
export const SEARCH_ANIME_REQUEST = 'SEARCH_ANIME_REQUEST';
export const SEARCH_ANIME_START = 'SEARCH_ANIME_START';
export const SEARCH_ANIME_SUCCESS = 'SEARCH_ANIME_SUCCESS';
export const SEARCH_ANIME_FAILURE = 'SEARCH_ANIME_FAILURE';
export const CLEAR_SEARCH_RESULT = 'CLEAR_SEARCH_RESULT';

//actions for reviews related operations
export const GET_REVIEWS_BY_ANIME = 'GET_REVIEWS_BY_ANIME';
export const GET_REVIEWS_BY_ANIME_START = 'GET_REVIEWS_BY_ANIME_START ';
export const GET_REVIEWS_BY_ANIME_SUCCESS = 'GET_REVIEWS_BY_ANIME_SUCCESS';
export const GET_REVIEWS_BY_ANIME_FAILURE = 'GET_REVIEWS_BY_ANIME_FAILURE';

//action get user info
export const GET_USER_PROFILE_INFO = 'GET_USER_PROFILE_INFO';
export const GET_USER_PROFILE_INFO_SUCCESS = 'GET_USER_PROFILE_INFO_SUCCESS';
export const GET_USER_PROFILE_INFO_FAILUE = 'GET_USER_PROFILE_INFO_FAILUE';
export const PATH_UPDATE_PROFILE = 'PATH_UPDATE_PROFILE';
export const PATH_UPDATE_PROFILE_SUCCESS = 'PATH_UPDATE_PROFILE_SUCCESS';
export const PATH_UPDATE_PROFILE_FAILUE = 'PATH_UPDATE_PROFILE_FAILUE';

export const GET_GENRE_DETAIL = 'GET_GENRE_DETAIL';
export const GET_GENRE_DETAIL_START = 'GET_GENRE_DETAIL_START';
export const GET_GENRE_DETAIL_SUCCESS = 'GET_GENRE_DETAIL_SUCCESS';
export const GET_GENRE_DETAIL_FAILURE = 'GET_GENRE_DETAIL_FAILURE';

export const GET_ANIME_LIST_GENRE = 'GET_ANIME_LIST_GENRE';
export const GET_ANIME_LIST_GENRE_START = 'GET_ANIME_LIST_GENRE_START';
export const GET_ANIME_LIST_GENRE_SUCCESS = 'GET_ANIME_LIST_GENRE_SUCCESS';
export const GET_ANIME_LIST_GENRE_FAILURE = 'GET_ANIME_LIST_GENRE_FAILURE';
export const CLEAR_ANIME_LIST_GENRE = 'CLEAR_ANIME_LIST_GENRE';
