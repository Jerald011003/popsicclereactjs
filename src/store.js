import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,
 
    
} from './reducers/productReducers'

import {
    songListReducer,
    songDetailsReducer,
    songDeleteReducer,
    songCreateReducer,
    songUpdateReducer,
    songReviewCreateReducer,
    songTopRatedReducer,
  
    
} from './reducers/songReducer'

import { cartReducer } from './reducers/cartReducers'
// import { songcartReducer } from './reducers/songcartReducers'
import { playlistListReducer, playlistReducer } from './reducers/playlistReducer'
import { wishReducer } from './reducers/wishReducers'
import { preorderReducer } from './reducers/preorderReducer'
import { chatboxReducer} from './reducers/chatboxReducer'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'

import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

   
    songList: songListReducer,
    songDetails: songDetailsReducer,
    songDelete: songDeleteReducer,
    songCreate: songCreateReducer,
    songUpdate: songUpdateReducer,
    songReviewCreate: songReviewCreateReducer,
    songTopRated: songTopRatedReducer,
    // songs: song,

    cart: cartReducer,
    // songcart: songcartReducer,
    playlistList: playlistListReducer,

    playlists: playlistListReducer,
    playlist: playlistReducer,
    wishlist: wishReducer,
    chatbox: chatboxReducer,
    // friendsList: friendsListReducer,
    preorder: preorderReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,
})


const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

// const songcartItemsFromStorage = localStorage.getItem('songcartItems') ?
//     JSON.parse(localStorage.getItem('songcartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        // songcartItems: songcartItemsFromStorage,

    },
    userLogin: { userInfo: userInfoFromStorage },
}



const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store