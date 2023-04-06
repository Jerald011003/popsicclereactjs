import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopSongs } from '../actions/songActions'

function SongCarousel() {
    const dispatch = useDispatch()

    const  songTopRated = useSelector(state => state. songTopRated)
    const { error, loading, songs } =  songTopRated

    useEffect(() => {
        dispatch(listTopSongs())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel pause='hover' className='bg-dark'>
                    {songs.map(song => (
                        <Carousel.Item key={song._id}>
                            <Link to={`/songs/${song._id}`}>
                                <Image src={song.image} alt={song.title} fluid />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{song.title} - {song.name} </h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )

    )
}

export default SongCarousel
