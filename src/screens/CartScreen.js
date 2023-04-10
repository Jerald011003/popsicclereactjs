import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

function CartScreen({ match, location, history }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])


    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Row>
            <Col md={20}>
                {/* <h1>Do you want to buy?</h1> */}
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Please choose your plan <Link to='/plan'>Click Here</Link>
                    </Message>
                ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col className='text-center'md={12}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={10}>
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </Col>

                                       

                                        

                                  

                                        <Col md={1}>
    <Button
        type='button'
        variant='light'
        onClick={() => removeFromCartHandler(item.product)}
        style={{ backgroundColor: 'red', color: 'white' }}
    >
        Cancel
    </Button>
</Col>


                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>

            <Col md={12}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Price</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>
                 
                    <br/>
                    <ListGroup.Item className='text-center'>
    <Button
        type='button'
        className='btn-block'
        disabled={cartItems.length === 0}
        onClick={checkoutHandler}
        style={{ fontSize: '25px', padding: '5px 100px' }}
    >
        Buy
    </Button>
</ListGroup.Item>

<br/>



                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen