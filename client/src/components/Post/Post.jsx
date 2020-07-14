import React from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

const Post = (props) => {

    return (
        <>
            <Link className='post' to={`/posts/${props._id}`}>
                <img className='post-img' scr={props.imgURL} />
                <div className='post-date'>{props.date}</div>
                <div className='post-title'>{props.title}</div>
                <div className='post-author'>{props.author}</div>
            </Link>
        </>
    )

}

export default Post