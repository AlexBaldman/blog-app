import React, { Component } from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

export default class Post extends Component {
    render() {
        return (
            <>
                <Link className='post' to={`/posts/${posts._id}`}>
                    <img className='post-img' scr={posts.imgURL} />
                    <div className='post-date'>{props.date}</div>
                    <div className='post-title'>{props.title}</div>
                    <div className='post-author'>{props.author}</div>
                </Link>
            </>
        )
    }
}
