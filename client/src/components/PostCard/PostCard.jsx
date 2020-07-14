import React from 'react'
import { Link } from 'react-router-dom'
import './PostCard.css'

export default function PostCard(props) {

    return (
        <div className='post-card'>
            <Link className='card' to={`/products/${props._id}`}>
                <img className='post-card-img' src={props.imgUrl} />
                <div>View</div>
            </Link>
        </div>
    )

}
