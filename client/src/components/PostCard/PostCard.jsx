import React, { Component } from 'react'
import './PostCard.css';
import { Link } from 'react-router-dom'

export default class PostCard extends Component {
    render() {
        return (
            <div className='post-card'>
                <Link className='card' to={`/products/${props._id}`}>
                    <img className='post-card-img' src={props.imgUrl} />
                    <div>View</div>
                </Link>
            </div>
        )
    }
}
