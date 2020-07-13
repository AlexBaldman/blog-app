import React, { Component } from 'react'
import './Post.css'
import { Link } from 'react-router-dom'

export default class Post extends Component {
    render() {
        return (
            <>
                <Link to={`/posts/${posts._id}`}>
                    <img scr={posts.imgURL} />
                    <div>{props.date}</div>
                    <div>{props.title}</div>
                    <div>{props.author}</div>
                </Link>
            </>
        )
    }
}
