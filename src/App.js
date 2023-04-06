import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/PlaylistScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import ChatFriend from './screens/ChatFriend'
import Wishlist from './screens/Wishlist'
import WishHandler from './screens/WishHandler'
import ChatBox from './screens/ChatBox'
import Songs from './screens/SongListScreen'
import SongScreen from './screens/SongScreen'
// import CartPlanScreen from './screens/CartPlanScreen'
import PlaylistScreen from './screens/PreorderScreen'
import test from './screens/test'
import Playlist from './screens/Playlist'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path='/' component={Songs} exact />
      
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />

          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

          <Route path='/admin/productlist' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

          <Route path='/admin/orderlist' component={OrderListScreen} />

          <Route path='/chatfriend' component={ChatFriend} />

          <Route path='/liked/:id?' component={Wishlist} />

          <Route path='/wishhandler/:id' component={WishHandler} />
          {/* <Route path='/playlist/:title' component={PlaylistScreen} /> */}
          <Route path='/playlist/:id?' component={PlaylistScreen} />

          {/* <Route path='/playlist/:id?' component={PlaylistScreen} /> */}
          {/* <Route
  path="/playlist/:id"
  render={(props) => <Playlist {...props} />}
/> */}

          <Route path='/chatbox' component={ChatBox} />
{/* Plans */}
          <Route path='/plan' component={HomeScreen} exact />
          <Route path='/songs/:id' component={SongScreen} />
          <Route path='/test' component={test} />
          <Route path='/playlistsongs' component={Playlist} />


          {/* <Route path='/cartplan/:id?' component={CartPlanScreen} /> */}


        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
