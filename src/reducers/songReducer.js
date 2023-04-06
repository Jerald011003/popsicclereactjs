import {
    SONG_LIST_REQUEST,
    SONG_LIST_SUCCESS,
    SONG_LIST_FAIL,
  
    SONG_DETAILS_REQUEST,
    SONG_DETAILS_SUCCESS,
    SONG_DETAILS_FAIL,
  
    SONG_DELETE_REQUEST,
    SONG_DELETE_SUCCESS,
    SONG_DELETE_FAIL,
  
    SONG_CREATE_REQUEST,
    SONG_CREATE_SUCCESS,
    SONG_CREATE_FAIL,
    SONG_CREATE_RESET,
  
    SONG_UPDATE_REQUEST,
    SONG_UPDATE_SUCCESS,
    SONG_UPDATE_FAIL,
    SONG_UPDATE_RESET,
  
    SONG_CREATE_REVIEW_REQUEST,
    SONG_CREATE_REVIEW_SUCCESS,
    SONG_CREATE_REVIEW_FAIL,
    SONG_CREATE_REVIEW_RESET,
  
    SONG_TOP_REQUEST,
    SONG_TOP_SUCCESS,
    SONG_TOP_FAIL,
  } from '../constants/songConstants'
  
  export const songListReducer = (state = { songs: [] }, action) => {
    switch (action.type) {
      case SONG_LIST_REQUEST:
        return { loading: true, songs: [] }
  
      case SONG_LIST_SUCCESS:
        return {
          loading: false,
          songs: action.payload.songs,
          page: action.payload.page,
          pages: action.payload.pages,
        }
  
      case SONG_LIST_FAIL:
        return { loading: false, error: action.payload }
  
      default:
        return state
    }
  }
  
  export const songDetailsReducer = (state = { song: { reviews: [] } }, action) => {
    switch (action.type) {
      case SONG_DETAILS_REQUEST:
        return { loading: true, ...state }
  
      case SONG_DETAILS_SUCCESS:
        return { loading: false, song: action.payload }
  
      case SONG_DETAILS_FAIL:
        return { loading: false, error: action.payload }
  
      default:
        return state
    }
  }
  
  export const songDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case SONG_DELETE_REQUEST:
        return { loading: true }
  
      case SONG_DELETE_SUCCESS:
        return { loading: false, success: true }
  
      case SONG_DELETE_FAIL:
        return { loading: false, error: action.payload }
  
      default:
        return state
    }
  }
  
  export const songCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SONG_CREATE_REQUEST:
        return { loading: true }
  
      case SONG_CREATE_SUCCESS:
        return { loading: false, success: true, song: action.payload }
  
      case SONG_CREATE_FAIL:
        return { loading: false, error: action.payload }
  
      case SONG_CREATE_RESET:
        return {}
  
      default:
        return state
    }
  }
  
  export const songUpdateReducer = (state = { song: {} }, action) => {
    switch (action.type) {
      case SONG_UPDATE_REQUEST:
        return { loading: true }
  
      case SONG_UPDATE_SUCCESS:
        return { loading: false, success: true, song: action.payload }
  
      case SONG_UPDATE_FAIL:
        return { loading: false, error: action.payload }
  
      case SONG_UPDATE_RESET:
        return { song: {} }
  
      default:
        return state
    }
  }
  
  export const songReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SONG_CREATE_REVIEW_REQUEST:
        return { loading: true }
  
      case SONG_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true }
  
      case SONG_CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload }
  
      case SONG_CREATE_REVIEW_RESET:
        return {}
  
      default:
        return state
    }
}

export const songTopRatedReducer = (state = { songs: [] }, action) => {
    switch (action.type) {
      case SONG_TOP_REQUEST:
        return { loading: true, songs: [] }
  
      case SONG_TOP_SUCCESS:
        return { loading: false, songs: action.payload }
  
      case SONG_TOP_FAIL:
        return { loading: false, error: action.payload }
  
      default:
        return state
    }
  }
  