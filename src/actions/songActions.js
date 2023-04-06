import axios from 'axios'
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

    SONG_UPDATE_REQUEST,
    SONG_UPDATE_SUCCESS,
    SONG_UPDATE_FAIL,

    SONG_CREATE_REVIEW_REQUEST,
    SONG_CREATE_REVIEW_SUCCESS,
    SONG_CREATE_REVIEW_FAIL,


    SONG_TOP_REQUEST,
    SONG_TOP_SUCCESS,
    SONG_TOP_FAIL,

} from '../constants/songConstants'


export const listSongs = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: SONG_LIST_REQUEST })

        const { data } = await axios.get(`https://wasdgames.pythonanywhere.com/api/songs${keyword}`)

        dispatch({
            type: SONG_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SONG_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listTopSongs = () => async (dispatch) => {
    try {
        dispatch({ type: SONG_TOP_REQUEST })

        const { data } = await axios.get(`https://wasdgames.pythonanywhere.com/api/songs/top/`)

        dispatch({
            type: SONG_TOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SONG_TOP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listSongDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: SONG_DETAILS_REQUEST })

        const { data } = await axios.get(`https://wasdgames.pythonanywhere.com/api/songs/${id}`)

        dispatch({
            type: SONG_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SONG_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const deleteSong = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SONG_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `https://wasdgames.pythonanywhere.com/api/songs/delete/${id}/`,
            config
        )

        dispatch({
            type: SONG_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: SONG_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const createSong = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SONG_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `https://wasdgames.pythonanywhere.com/api/songs/create/`,
            {},
            config
        )
        dispatch({
            type: SONG_CREATE_SUCCESS,
            payload: data,
})


} catch (error) {
    dispatch({
        type: SONG_CREATE_FAIL,
        payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    })
}
}



export const updateSong = (song) => async (dispatch, getState) => {
    try {
    dispatch({
    type: SONG_UPDATE_REQUEST
    })

    const {
        userLogin: { userInfo },
    } = getState()

    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }

    const { data } = await axios.put(
        `https://wasdgames.pythonanywhere.com/api/songs/update/${song._id}/`,
        song,
        config
    )

    dispatch({
        type: SONG_UPDATE_SUCCESS,
        payload: data
    })

} catch (error) {
    dispatch({
        type: SONG_UPDATE_FAIL,
        payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    })
}
}

export const createSongReview = (songId, review) => async (dispatch, getState) => {
    try {
    dispatch({
    type: SONG_CREATE_REVIEW_REQUEST
    })

    const {
        userLogin: { userInfo },
    } = getState()

    const config = {
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }

    await axios.post(
        `https://wasdgames.pythonanywhere.com/api/songs/${songId}/reviews/`,
        review,
        config
    )

    dispatch({
        type: SONG_CREATE_REVIEW_SUCCESS,
    })

} catch (error) {
    dispatch({
        type: SONG_CREATE_REVIEW_FAIL,
        payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
    })
}
}
